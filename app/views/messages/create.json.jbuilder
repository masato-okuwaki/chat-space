json.name @message.user.name
# {name: @messageのuserのname}
json.content @message.content
json.image @message.image.url
json.date @message.created_at.strftime('%Y/%m/%d %H:%M:%S')
json.id @message.id
