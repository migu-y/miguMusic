## git 命令
git config --global user.name  设置用户名

git config --global user.email  设置用户邮箱

ssh-keygen -t rsa -C 535964113@qq.com 生成本地密码

### 新建本地仓库
git init

### 互动命令
git clone url 克隆下载项目

git status  有无新东西可以上传，将追踪的所有文件上传
git config --global alias.st status 取别名，将status改名为st
git add .   追踪目录下所有的文件

git ci -am 'test' 提交到本地仓库，并加上注释test

git st 再次检查有无新东西可以上传

git remote add origin https://github.com/migu-y/miguMusic.git   把本地仓库和远端的仓库关联



### 回滚
git log 查看可以回滚的目录 

git reset 351357351(特殊的hash值的前几位) --hard   会滚动某个节点
