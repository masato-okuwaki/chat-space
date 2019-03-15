## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|password|integer|null: false|

### Association
- has_many :messages
- has_many :groups, through: :users_groups
- has_many :users_groups


## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|body|text|null: false|
|user|references|foreign_key: true|
|group|references|foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group


## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

### Association
- has_many :messages
- has_many :users, through: :users_groups
- has_many :users_groups


## users_groupsテーブル

|Column|Type|Options|
|------|----|-------|
|user|refarences|foreign_key: true|
|group|refarennces|foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group
