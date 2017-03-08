<template>
    <div>
        <!--<h1>基础布局</h1>-->
        <!--<p>通过基础的 24 分栏，迅速简便地创建布局。</p>-->
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i> layout</el-breadcrumb-item>
                <el-breadcrumb-item>基础布局</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="plugins-tips">
            <p>通过基础的 24 分栏，迅速简便地创建布局。</p>
            详细使用情况参考地址：<a href="http://element.eleme.io/#/zh-CN/component/layout" target="_blank">element UI布局</a>
        </div>
        <div class="demo-box">
            <h2>基础布局 </h2>
            <p>使用单一分栏创建基础的栅格布局。</p>
        </div>

        <div class="demo-block demo-box">
            <el-row>
                <el-col :span="24"><div class="grid-content bg-purple-dark"></div></el-col>
            </el-row>
            <el-row>
                <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
                <el-col :span="12"><div class="grid-content bg-purple-light"></div></el-col>
            </el-row>
            <el-row>
                <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
                <el-col :span="8"><div class="grid-content bg-purple-light"></div></el-col>
                <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
            </el-row>
            <el-row>
                <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
                <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
                <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
                <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
            </el-row>
            <el-row>
                <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
                <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
                <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
                <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
                <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
                <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
            </el-row>
        </div>
        <div class="demo-box">
            <h2>分栏间隔 </h2>
            <p>分栏之间存在间隔。</p>
        </div>

        <div class="demo-block demo-box">
            <el-row :gutter="20">
                <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
                <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
                <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
                <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
            </el-row>
        </div>

    </div>
</template>

<style>
    .demo-block {
        border: 1px solid #eaeefb;
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