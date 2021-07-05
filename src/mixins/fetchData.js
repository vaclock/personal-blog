export default {
    data() {
        return {
            isLoading: true,
            data: []
        }
    },
    async created() {
        this.data = await this.remoteData();
        this.isLoading = false;
    }
}
