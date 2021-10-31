
// 该组件混入提供了异步注册created钩子函数，来请求数据，并且有数据isLoading来表征数据是否加载完成
export default function fetchData(dataType = []) {
    return {
        data: function () {
            return {
                data: dataType,
                isLoading: true
            }
        },
        created: async function () {
            this.data = await this.remoteData(); 
            this.isLoading = false;
        }
    }
}