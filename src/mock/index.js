import Mock from "mockjs";

// banner的ajax拦截
import "./banner";
// blog的ajax拦截
import "./blog";

Mock.setup({
    timeout:'1000-2000'
})