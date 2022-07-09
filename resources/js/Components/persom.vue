<template>
    <div>
        <v-app-bar flat>
            <h2>ยินดีต้อนรับเข้าสู่ระบบงานวิจัยคณะวิทยาศาสตร์</h2>
        </v-app-bar>
            <v-container>
                <v-row>
                    <v-card class="overflow-hidden">
                        <h3>งานวิจัยของฉัน</h3>
                        <v-row>
                            <v-col cols="12" md="12">
                                <h5>ส่วนที่ 1 ข้อมูลทั่วไป ภาษาอังกฤษ :</h5>
                                <h5>ส่วนที่ 1 ข้อมูลทั่วไป ภาษาอังกฤษ :</h5>
                            </v-col>   
                        </v-row>
                        <h3>ความเชี่ยวชาญของฉัน</h3>
                        <v-row>
                            <v-col cols="12" md="12">
                                <h5>ส่วนที่ 1 ข้อมูลทั่วไป ภาษาอังกฤษ :</h5>
                                <h5>ส่วนที่ 1 ข้อมูลทั่วไป ภาษาอังกฤษ :</h5>
                            </v-col>   
                        </v-row>
                    </v-card>
                </v-row>
            </v-container>
        
    </div>
</template>

<script>
export default {
    name: "DashboardNotifications",

    data: () => ({

    }),

    computed: {
        parsedDirection() {
            return this.direction.split(" ");
        },
        height() {
            switch (this.$vuetify.breakpoint.name) {
                case "xs":
                    return 220;
                case "sm":
                    return 400;
                case "md":
                    return 500;
                case "lg":
                    return 600;
                case "xl":
                    return 800;
            }
        },

        methods: {
            randomColor() {
                this.color =
                    this.colors[Math.floor(Math.random() * this.colors.length)];
            },
        },
    },
};
</script>
