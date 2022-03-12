/**
 * 需要提供 fetchData方法用于获取远程数据
 */

export default function fetchData(defaultData = null) {
    return {
        data() {
            return {
                data: defaultData,
                isLoading: true,
            }
        },
        async created() {
            this.data = await this.fetchData()
            this.isLoading = false
        }
    }
}
