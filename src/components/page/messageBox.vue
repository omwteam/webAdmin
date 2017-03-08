<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i> 控件交互</el-breadcrumb-item>
                <el-breadcrumb-item>message提示</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="demo-block demo-box">
            <h2>messageBox提示框 </h2>
            <p>模拟系统的消息提示框而实现的一套模态对话框组件，用于消息提示、成功提示、错误提示、询问信息。</p>
        </div>
        <div class="demo-block demo-box">
            <el-row :gutter="20">
                <el-col :span="3" type="flex" justify="center" align="center">
                    <!--<div class="grid-content bg-purple">-->
                    <el-button type="primary" @click="alert">alert</el-button>
                    <!--</div>-->
                </el-col>
                <el-col :span="3" type="flex" justify="center" align="center">
                    <!--<div class="grid-content bg-purple">-->
                    <el-button type="primary" @click="confirm">confirm</el-button>
                    <!--</div>-->
                </el-col>
                <el-col :span="3" type="flex" justify="center" align="center">
                    <!--<div class="grid-content bg-purple">-->
                    <el-button type="primary" @click="prompt">prompt</el-button>
                    <!--</div>-->
                </el-col>
                <!--<el-col :span="3" type="flex" justify="center" align="center">-->
                    <!--&lt;!&ndash;<div class="grid-content bg-purple">&ndash;&gt;-->
                    <!--<el-button type="primary" @click="prompt">prompt</el-button>-->
                    <!--&lt;!&ndash;</div>&ndash;&gt;-->
                <!--</el-col>-->
                <el-col :span="3" type="flex" justify="center" align="center">
                    <!--<div class="grid-content bg-purple">-->
                    <el-button type="primary" @click="custom">custom自定义弹出框</el-button>
                    <!--</div>-->
                </el-col>
            </el-row>

        </div>
        <div class="demo-box">
            <h2>详细参数 </h2>
            <p>更多更全功能参考：<a href="http://element.eleme.io/#/zh-CN/component/message-box" target="_blank">查看API</a> </p>
        </div>

        <div class="demo-block demo-box">
            <el-table
                    :data="tableData"
                    style="width: 100%">
                <el-table-column
                        prop="optionName"
                        label="参数"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="info"
                        label="说明"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="type"
                        label="类型">
                </el-table-column>
                <el-table-column
                        prop="optionalParam"
                        label="可选参数">
                </el-table-column>
                <el-table-column
                        prop="defaultValue"
                        label="默认值">
                </el-table-column>
            </el-table>
        </div>

    </div>
</template>
<script>
	export default {
		data() {
			return {
				tableData: [
					{
                        optionName: 'title',
                        info: 'MessageBox 标题',
                        type: 'string',
                        optionalParam: '—',
                        defaultValue: "—"
				    },
					{
						optionName: 'title',
						info: 'MessageBox 标题',
						type: 'string',
						optionalParam: '—',
						defaultValue: "—"
					},
					{
						optionName: 'message',
						info: 'MessageBox 标题',
						type: 'string',
						optionalParam: '—',
						defaultValue: "—"
					},
					{
						optionName: 'type',
						info: '消息类型，用于显示图标',
						type: 'string',
						optionalParam: 'success/info/warning/error',
						defaultValue: "—"
					},
					{
						optionName: 'customClass',
						info: 'MessageBox 的自定义类名',
						type: 'string',
						optionalParam: '—',
						defaultValue: "—"
					},
					{
						optionName: 'callback',
						info: '若不使用 Promise，可以使用此参数指定 MessageBox 关闭后的回调',
						type: 'string',
						optionalParam: '—',
						defaultValue: "—"
					},
					{
						optionName: 'showCancelButton',
						info: '是否显示取消按钮',
						type: 'bool',
						optionalParam: '—',
						defaultValue: true
					},
					{
						optionName: 'showConfirmButton',
						info: '是否显示确定按钮',
						type: 'bool',
						optionalParam: '—',
						defaultValue: false
					},
					{
						optionName: 'cancelButtonText',
						info: '取消文本内容',
						type: 'string',
						optionalParam: '—',
						defaultValue: "取消"
					},
					{
						optionName: 'confirmButtonText',
						info: '确认文本内容',
						type: 'string',
						optionalParam: '—',
						defaultValue: "确定"
					},
					{
						optionName: 'showInput',
						info: '是否显示文本',
						type: 'string',
						optionalParam: '—',
						defaultValue: "确定"
					},
                ]
			}
		},
		methods: {
			alert() {
				this.$alert('这是一段内容', '标题名称', {
//					confirmButtonText: '确定',
					showConfirmButton: false,
					callback: action => {
						this.$message({
							type: 'info',
							message: `action: ${ action }`
						});
					}
				});
			},
			confirm() {
				this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
//					confirmButtonText: '确定',
//					cancelButtonText: '取消',
					showConfirmButton: true,
					showCancelButton: true,
					type: 'warning'
				}).then(() => {
					this.$message({
						type: 'success',
						message: '删除成功!'
					});
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消删除'
					});
				});
			},
			prompt() {
				this.$prompt('请输入邮箱', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
					inputErrorMessage: '邮箱格式不正确'
				}).then(({ value }) => {
					this.$message({
						type: 'success',
						message: '你的邮箱是: ' + value
					});
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '取消输入'
					});
				});
			},
			custom() {
				this.$msgbox({
					title: '消息',
					message: '这是一段内容, 这是一段内容, 这是一段内容, 这是一段内容, 这是一段内容, 这是一段内容, 这是一段内容',
					showCancelButton: true,
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					beforeClose: (action, instance, done) => {
						if (action === 'confirm') {
							instance.confirmButtonLoading = true;
							instance.confirmButtonText = '执行中...';
							setTimeout(() => {
								done();
								setTimeout(() => {
									instance.confirmButtonLoading = false;
								}, 300);
							}, 3000);
						} else {
							done();
						}
					}
				}).then(action => {
					this.$message({
						type: 'info',
						message: 'action: ' + action
					});
				});
			}
		}
	}
</script>
<style>
    .demo-block {
        /*border: 1px solid #eaeefb;*/
        border-radius: 4px;
        transition: .2s;
    }

    .demo-box {
        margin-bottom: 24px;
    }

    .el-row {
        margin-bottom: 20px;
    }

    .el-row:last-child {
        margin-bottom: 0;
    }

    .el-col {
        border-radius: 4px;
    }

    .bg-purple-dark {
        background: #99a9bf;
    }

    .bg-purple {
        background: #d3dce6;
    }

    .bg-purple-light {
        background: #e5e9f2;
    }

    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }

    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }
</style>