import discord
from discord.ext import commands

intents = discord.Intents.all()

bot = commands.Bot(command_prefix='!', intents=intents)

@bot.event
async def on_ready():
    print('GroupBot ready!')

@bot.command()
async def create_group(ctx, group_name: str):
    guild = ctx.guild
    author = ctx.author
    category = await guild.create_category(group_name)
    regular_role = await guild.create_role(name=f"{group_name} regular")
    group_role = await guild.create_role(name=group_name)
    leader_role = await guild.create_role(name=f"{group_name} leader")
    await author.add_roles(group_role, leader_role)
    await category.set_permissions(regular_role, read_messages=True, connect=True)
    await category.set_permissions(leader_role, read_messages=True, connect=True, manage_channels=True)
    await category.set_permissions(guild.default_role, read_messages=False)
    await ctx.send(f"{group_name} has been created!")
    await category.create_text_channel(f"{group_name}-text")
    await category.create_voice_channel(f"{group_name}-voice")

@bot.command()
async def join_group(ctx, group_name: str):
    guild = ctx.guild
    author = ctx.author
    group_role = discord.utils.get(guild.roles, name=group_name)
    if group_role is None:
        await ctx.send(f"{group_name} does not exist!")
        return
    regular_role = discord.utils.get(guild.roles, name=f"{group_name} regular")
    if regular_role is None:
        await ctx.send("Something went wrong, please contact an administrator.")
        return
    if regular_role in author.roles:
        await ctx.send("You are already a member of this group!")
        return
    leader_role = discord.utils.get(guild.roles, name=f"{group_name} leader")
    if leader_role is None:
        await author.add_roles(regular_role)
        await ctx.send(f"You have joined {group_name}!")
        return
    if leader_role in author.roles:
        await ctx.send("You are already a member of this group!")
        return
    await author.add_roles(regular_role)
    await ctx.send(f"You have joined {group_name}!")

@bot.command()
async def appoint_leader(ctx, member: discord.Member, group_name: str):
    guild = ctx.guild
    author = ctx.author
    group_role = discord.utils.get(guild.roles, name=group_name)
    if group_role is None:
        await ctx.send(f"{group_name} does not exist!")
        return
    leader_role = discord.utils.get(guild.roles, name=f"{group_name} leader")
    if leader_role is None:
        await ctx.send("Something went wrong, please contact an administrator.")
        return
    if leader_role not in author.roles:
        await ctx.send("You are not the current leader of this group!")
        return
    if leader_role not in member.roles:
        await member.add_roles(leader_role)
    await author.remove_roles(leader_role)
    await ctx.send(f"{member.mention} is now the new leader of {group_name}!")

@bot.command()
async def leave_group(ctx, group_name: str):
    guild = ctx.guild
    author = ctx.author
    group_role = discord.utils.get(guild.roles, name=group_name)
    if group_role is None:
        await ctx.send(f"{group_name} does not exist!")
        return
    regular_role = discord.utils.get(guild.roles, name=f"{group_name} regular")
    if regular_role is None:
        await ctx.send("Something went wrong, please contact an administrator.")
        return
    leader_role = discord.utils.get(guild.roles, name=f"{group_name} leader")
    if leader_role is None:
        await ctx.send("Something went wrong, please contact an administrator.")
        return
    if leader_role in author.roles:
        await ctx.send("You are the current leader of this group. Please appoint a new leader before leaving.")
        return
    if regular_role not in author.roles:
        await ctx.send("You are not a member of this group!")
        return
    await author.remove_roles(regular_role)
    await ctx.send(f"You have left {group_name}!")

@bot.command()
async def delete_group(ctx, group_name: str):
    guild = ctx.guild
    author = ctx.author
    group_role = discord.utils.get(guild.roles, name=group_name)
    if group_role is None:
        await ctx.send(f"{group_name} does not exist!")
        return
    leader_role = discord.utils.get(guild.roles, name=f"{group_name} leader")
    if leader_role is None:
        await ctx.send("Something went wrong, please contact an administrator.")
        return
    if leader_role not in author.roles:
        await ctx.send("You are not the leader of this group!")
        return
    regular_role = discord.utils.get(guild.roles, name=f"{group_name} regular")
    if regular_role is not None:
        await regular_role.delete()
    await group_role.delete()
    await leader_role.delete()
    category = discord.utils.get(guild.categories, name=group_name)
    if category is not None:
        for channel in category.channels:
            await channel.delete()
        await category.delete()
    await ctx.send(f"{group_name} has been deleted!")

bot.run('')
