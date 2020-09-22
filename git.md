## git 命令
git config --global user.name  设置用户名

git config --global user.email  设置用户邮箱

ssh-keygen -t rsa -C 535964113@qq.com 生成本地密码

### 新建本地仓库
git init

### 互动命令
git clone url 克隆下载项目

git status(st)  检查有无新东西可以上传
git config --global alias.st status 取别名，将status改名为st

下面俩命令一起敲就是再次提交新文件
git add .   追踪目录下所有的文件
git ci(commit) -am 'test' 提交到本地仓库，并加上注释test

git st 再次检查有无新东西可以上传

git remote add origin git@github.com:migu-y/miguMusic.git   把本地仓库和远端的仓库关联

git branch(br) 查看分支

git branch **新建一个分支

git checkout(br) **到某个分支去

git co -b cxy 新建一个cxy分支并直接切换到那个分支

只有在某个分支中push后，分支才会上传到远端

<<<<<<< HEAD
=======
git branch --set-upstream-to=origin/master master
git pull
每天更新最新的项目进度时，需要进入本地的master 并git pull拉下来最新的代码。
之后进入自己的分支,git merge master即可
如果Git pull出错时，则需要将本地的master和远程的origin master做连接 ：git branch --set-upstream-to=origin/master master，之后就可以正常pull了

>>>>>>> remotes/origin/cxy
### 回滚
git log 查看可以回滚的目录 

git reset 351357351(特殊的hash值的前几位) --hard   会滚动某个节点
