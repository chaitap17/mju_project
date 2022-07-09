<template>
    <div>
        <v-app-bar flat>
            <h2>สร้างงานวิจัย</h2>
        </v-app-bar>
        <v-form v-model="valid">
            <v-container>
                <v-row
                    ><v-card class="overflow-hidden">
                        <h3>ส่วนที่ 1 ข้อมูลทั่วไป</h3>
                        <v-row>
                            <v-col cols="12" md="6"
                                ><h5>ส่วนที่ 1 ข้อมูลทั่วไป ภาษาอังกฤษ :</h5>
                                หัวข้อ
                                <v-text-field
                                    solo
                                    v-model="name"
                                    :rules="nameRules"
                                    label="ชื่อหัวข้อวิจัย "
                                    required
                                    :error-messages="nameErrors"
                                    :counter="10"
                                    @input="$v.name.$touch()"
                                    @blur="$v.name.$touch()"
                                ></v-text-field
                                >บทคัดย่อ :
                                <v-textarea
                                    auto-grow
                                    solo
                                    v-model="message"
                                    single-line
                                    label="บทคัดย่อ"
                                ></v-textarea>
                                คำสำคัญ :
                                <v-textarea
                                    auto-grow
                                    solo
                                    v-model="message"
                                    single-line
                                    label="คำสำคัญ"
                                ></v-textarea>
                                รหัสอ้างอิง วช.
                                <v-select
                                    :items="items"
                                    label="รหัสอ้างอิง วช."
                                    solo
                                ></v-select
                                >ช่วงเวลาวิจัย:<v-select
                                    :items="items"
                                    label="รหัสอ้างอิง วช."
                                    solo
                                ></v-select
                                >ประเภทงานวิจัย<v-select
                                    :items="items"
                                    label="รหัสอ้างอิง วช."
                                    solo
                                ></v-select
                                >กิจกรรมที่เกี่ยวข้อง
                                <v-select
                                    :items="items"
                                    label="รหัสอ้างอิง วช."
                                    solo
                                ></v-select
                                >สถานะการดำเนินการ
                                <v-select
                                    :items="status"
                                    label="รหัสอ้างอิง วช."
                                    solo
                                ></v-select>
                            </v-col>
                            <v-col cols="12" md="6"
                                ><h5>ส่วนที่ 1 ข้อมูลทั่วไป ภาษาอังกฤษ :</h5>
                                หัวข้อ
                                <v-text-field
                                    solo
                                    v-model="name"
                                    :rules="nameRules"
                                    label="Title name"
                                    required
                                ></v-text-field
                                >Abstract :
                                <v-textarea
                                    auto-grow
                                    solo
                                    v-model="message"
                                    single-line
                                    label="Abstract"
                                ></v-textarea>
                                Keyword :
                                <v-textarea
                                    auto-grow
                                    solo
                                    v-model="message"
                                    single-line
                                    label="keyword"
                                ></v-textarea
                                >รหัสอ้างอิงมหาวิทยาลัย:<v-select
                                    :items="items"
                                    label="รหัสอ้างอิง วช."
                                    solo
                                ></v-select
                                >รูปแบบงานวิจัย :<v-select
                                    :items="items"
                                    label="รหัสอ้างอิง วช."
                                    solo
                                ></v-select
                                >สาขางานวิจัย :<v-select
                                    :items="items"
                                    label="รหัสอ้างอิง วช."
                                    solo
                                ></v-select>
                                Road map :<v-select
                                    :items="items"
                                    label="รหัสอ้างอิง วช."
                                    solo
                                ></v-select>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" md="6">
                                ประเภทโครงการวิจัย :
                                <v-text-field
                                    solo
                                    v-model="name"
                                    :rules="nameRules"
                                    label="Title name"
                                    required
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" md="6">
                                ลักษณะโครงการวิจัย :
                                <v-text-field
                                    solo
                                    v-model="name"
                                    :rules="nameRules"
                                    label="Title name"
                                    required
                                ></v-text-field>
                            </v-col>
                        </v-row>
                    </v-card>

                    <v-card>
                        <v-row>
                            <h3>ส่วนที่ 2 ข้อมูลนักวิจัย</h3>

                            <v-row
                                ><h5>ผู้วิจัยหลัก</h5>
                                <v-col cols="12" md="6">
                                    ชื่อผู้วิจัย :
                                    <v-text-field
                                        solo
                                        v-model="name"
                                        :rules="nameRules"
                                        label="Title name"
                                        required
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" md="6">
                                    ตำแหน่งการวิจัย :
                                    <v-select
                                        solo
                                        v-model="name"
                                        :rules="nameRules"
                                        label="Title name"
                                        required
                                    ></v-select
                                ></v-col>
                                <v-col cols="12" md="4">
                                    คณะ :
                                    <v-text-field
                                        solo
                                        v-model="name"
                                        :rules="nameRules"
                                        label="Title name"
                                        required
                                    >
                                    </v-text-field>
                                </v-col>
                                <v-col cols="12" md="4">
                                    สาขา :
                                    <v-select
                                        solo
                                        v-model="name"
                                        :rules="nameRules"
                                        label="Title name"
                                        required
                                    >
                                    </v-select>
                                </v-col>
                                <v-col cols="12" md="4"
                                    >ร้อยละความรับผิดชอบ:
                                    <v-text-field
                                        solo
                                        v-model="name"
                                        :rules="nameRules"
                                        label="Title name"
                                        required
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row
                                ><h5>ผู้วิจัยรอง</h5>
                                <v-col cols="12" md="6">
                                    ชื่อผู้วิจัย :
                                    <v-text-field
                                        solo
                                        v-model="name"
                                        :rules="nameRules"
                                        label="Title name"
                                        required
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" md="6">
                                    ตำแหน่งการวิจัย :
                                    <v-select
                                        solo
                                        v-model="name"
                                        :rules="nameRules"
                                        label="Title name"
                                        required
                                    ></v-select
                                ></v-col>
                                <v-col cols="12" md="4">
                                    คณะ :
                                    <v-text-field
                                        solo
                                        v-model="name"
                                        :rules="nameRules"
                                        label="Title name"
                                        required
                                    >
                                    </v-text-field>
                                </v-col>
                                <v-col cols="12" md="4">
                                    สาขา :
                                    <v-select
                                        solo
                                        v-model="name"
                                        :rules="nameRules"
                                        label="Title name"
                                        required
                                    >
                                    </v-select>
                                </v-col>
                                <v-col cols="12" md="4"
                                    >ร้อยละความรับผิดชอบ:
                                    <v-text-field
                                        solo
                                        v-model="name"
                                        :rules="nameRules"
                                        label="Title name"
                                        required
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                        </v-row>
                    </v-card>

                    <v-card>
                        <v-row>
                            <h3>ส่วนที่ 3 ที่ปรึกษางานวิจัย</h3>
                            <v-row>
                                <v-col cols="12" md="12">
                                    ที่ปรึกษางานวิจัย
                                    <v-text-field
                                        solo
                                        v-model="name"
                                        :rules="nameRules"
                                        label="Title name"
                                        required
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                        </v-row>
                    </v-card>
                    <v-card>
                        <v-row>
                            <h3>ส่วนที่ 4 แนวทางการดำเนินงานวิจัย</h3>
                            <v-row>
                                <v-col cols="12" md="12">
                                    ที่ปรึกษางานวิจัย
                                    <v-text-field
                                        solo
                                        v-model="name"
                                        :rules="nameRules"
                                        label="Title name"
                                        required
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                        </v-row>
                    </v-card>
                    <v-card>
                        <v-row>
                            <h3>ส่วนที่ 5 วัตถุประสงค์งานวิจัย</h3>
                            <v-row>
                                <v-col cols="12" md="12">
                                    ที่ปรึกษางานวิจัย
                                    <v-text-field
                                        solo
                                        v-model="name"
                                        :rules="nameRules"
                                        label="Title name"
                                        required
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                        </v-row>
                    </v-card>
                    <v-card>
                        <v-row>
                            <h3>ส่วนที่ 6 ประโยชน์ที่คาดว่าจะได้รับ</h3>
                            <v-row>
                                <v-col cols="12" md="12">
                                    ที่ปรึกษางานวิจัย
                                    <v-text-field
                                        solo
                                        v-model="name"
                                        :rules="nameRules"
                                        label="Title name"
                                        required
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                        </v-row>
                    </v-card>
                    <v-card>
                        <v-row>
                            <h3>ส่วนที่ 7 ผลสำเร็จที่คาดว่าจะได้รับ</h3>
                            <v-row>
                                <v-col cols="12" md="12">
                                    ที่ปรึกษางานวิจัย
                                    <v-text-field
                                        solo
                                        v-model="name"
                                        :rules="nameRules"
                                        label="Title name"
                                        required
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                        </v-row>
                    </v-card>
                    <v-card>
                        <v-row>
                            <h3>ส่วนที่ 8 พื้นที่ดำเนินงานวิจัย</h3>
                            <v-row>
                                <v-col cols="12" md="12">
                                    ที่ปรึกษางานวิจัย
                                    <v-text-field
                                        solo
                                        v-model="name"
                                        :rules="nameRules"
                                        label="Title name"
                                        required
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                        </v-row>
                    </v-card>
                    <v-card>
                        <v-row>
                            <h3>ส่วนที่ 9 งานวิจัยอื่นๆ ที่เกี่ยวข้อง</h3>
                            <v-row>
                                <v-col cols="12" md="12">
                                    ที่ปรึกษางานวิจัย
                                    <v-select
                                        solo
                                        v-model="name"
                                        :rules="nameRules"
                                        label="Title name"
                                        required
                                    ></v-select>
                                </v-col>
                            </v-row>
                        </v-row>
                    </v-card>
                    <v-card>
                        <v-row>
                            <h3>ส่วนที่ 10 แหล่งทุนสนับสนุนงานวิจัย</h3>
                            <v-row
                                ><h5>การจัดงบประมาณ</h5>
                                <v-col cols="12" md="6">
                                    ประเภททุนสนับสนุน
                                    <v-select
                                        solo
                                        v-model="name"
                                        :rules="nameRules"
                                        label="Title name"
                                        required
                                    ></v-select>
                                </v-col>
                                <v-col cols="12" md="6">
                                    แหล่งทุนสนับสนุน
                                    <v-select
                                        solo
                                        v-model="name"
                                        :rules="nameRules"
                                        label="Title name"
                                        required
                                    ></v-select></v-col
                                ><v-col cols="12" md="12">
                                    ระดับแหล่งทุน
                                    <v-select
                                        solo
                                        v-model="name"
                                        :rules="nameRules"
                                        label="Title name"
                                        required
                                    ></v-select
                                ></v-col>
                                <v-col cols="12" md="4">
                                    ปีงบประมาณ
                                    <v-select
                                        solo
                                        v-model="name"
                                        :rules="nameRules"
                                        label="Title name"
                                        required
                                    >
                                    </v-select>
                                </v-col>
                                <v-col cols="12" md="4">
                                    ช่วงเวลาที่ได้รับ
                                    <v-select
                                        solo
                                        v-model="name"
                                        :rules="nameRules"
                                        label="Title name"
                                        required
                                    >
                                    </v-select>
                                </v-col>
                                <v-col cols="12" md="4"
                                    >xxx
                                    <v-text-field
                                        solo
                                        v-model="name"
                                        :rules="nameRules"
                                        label="Title name"
                                        required
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" md="4">
                                    จำนวนเงินที่่สนับสนุน
                                    <v-text-field
                                        solo
                                        v-model="name"
                                        :rules="nameRules"
                                        label="Title name"
                                        required
                                    >
                                    </v-text-field>
                                </v-col>
                                <v-col cols="12" md="4">
                                    คำอธิบายเพิ่มเติม
                                    <v-text-field
                                        solo
                                        v-model="name"
                                        :rules="nameRules"
                                        label="Title name"
                                        required
                                    >
                                    </v-text-field>
                                </v-col>
                                <v-col cols="12" md="4"
                                    >วันที่ส่งมอบงานวิจัย
                                    <v-text-field
                                        solo
                                        v-model="name"
                                        :rules="nameRules"
                                        label="Title name"
                                        required
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                        </v-row>
                    </v-card>
                    <v-card>
                        <v-row>
                            <h3>ส่วนที่ 11 เอกสารประกอบงานวิจัย</h3>
                            <v-row>
                                <v-col cols="12" md="12">
                                    ที่ปรึกษางานวิจัย
                                    <v-file-input
                                        solo
                                        v-model="name"
                                        :rules="nameRules"
                                        label="File input"
                                        required
                                        multiple
                                        show-size
                                        counter
                                    ></v-file-input>
                                </v-col>
                            </v-row>
                        </v-row>
                    </v-card>
                    <v-card>
                        <v-row>
                            <h3>ส่วนที่ 12 การนำเสนองานวิจัย</h3>
                            <v-row
                                ><h5>การนำเสนองานวิจัย</h5>
                                <v-col cols="12" md="6">
                                    วันที่นำเสนองานวิจัย
                                    <v-text-field
                                        solo
                                        v-model="name"
                                        :rules="nameRules"
                                        label="Title name"
                                        required
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" md="6">
                                    รูปแบบการนำเสนอ
                                    <v-select
                                        solo
                                        v-model="name"
                                        :rules="nameRules"
                                        label="Title name"
                                        required
                                    ></v-select
                                ></v-col>
                                <v-col cols="12" md="6">
                                    ประเภทงานวิชาการ
                                    <v-select
                                        solo
                                        v-model="name"
                                        :rules="nameRules"
                                        label="Title name"
                                        required
                                    ></v-select>
                                </v-col>
                                <v-col cols="12" md="6">
                                    ชื่องานวิชาการ
                                    <v-text-field
                                        solo
                                        v-model="name"
                                        :rules="nameRules"
                                        label="Title name"
                                        required
                                    ></v-text-field
                                ></v-col>
                                <v-col cols="12" md="6">
                                    สถานที่นำเสนอ
                                    <v-text-field
                                        solo
                                        v-model="name"
                                        :rules="nameRules"
                                        label="Title name"
                                        required
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" md="6">
                                    ระดับการนำเสนอ
                                    <v-select
                                        solo
                                        v-model="name"
                                        :rules="nameRules"
                                        label="Title name"
                                        required
                                    ></v-select
                                ></v-col>
                                <v-col cols="12" md="12">
                                    ชื่อหน่วยงานที่จัด
                                    <v-text-field
                                        solo
                                        v-model="name"
                                        :rules="nameRules"
                                        label="Title name"
                                        required
                                    ></v-text-field
                                ></v-col>
                            </v-row>
                        </v-row>
                    </v-card>
                    <v-card>
                        <v-row>
                            <h3>ส่วนที่ 13 การตีพิมพ์เผยแพร่งานวิจัย</h3>
                            <v-row
                                >การตีพิมพ์งานวิจัย
                                <v-col cols="12" md="12">
                                    การอ้างอิง/วารสารงานที่ สกอ.ยอมรับ
                                    <v-text-field
                                        solo
                                        v-model="name"
                                        :rules="nameRules"
                                        label="Title name"
                                        required
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" md="12">
                                    ระดับการนำเสนอ
                                    <v-select
                                        solo
                                        v-model="name"
                                        :rules="nameRules"
                                        label="Title name"
                                        required
                                    ></v-select
                                ></v-col>
                                <v-col cols="12" md="12">
                                    ชื่อบทความภาษาไทย/อังกฤษ
                                    <v-text-field
                                        solo
                                        v-model="name"
                                        :rules="nameRules"
                                        label="Title name"
                                        required
                                    ></v-text-field
                                ></v-col>
                                <v-col cols="12" md="12">
                                    ชื่อบทความภาษาอังกฤษ
                                    <v-text-field
                                        solo
                                        v-model="name"
                                        :rules="nameRules"
                                        label="Title name"
                                        required
                                    ></v-text-field></v-col
                                ><v-col cols="12" md="5">
                                    วัน เดือน ปี ที่ตีพิมพ์
                                    <v-select
                                        solo
                                        v-model="name"
                                        :rules="nameRules"
                                        label="Title name"
                                        required
                                    ></v-select
                                    >เลขหน้า
                                    <v-text-field
                                        solo
                                        v-model="name"
                                        :rules="nameRules"
                                        label="Title name"
                                        required
                                    ></v-text-field></v-col
                                ><v-col cols="12" md="7">
                                    ฉบับที่
                                    <v-text-field
                                        solo
                                        v-model="name"
                                        :rules="nameRules"
                                        label="Title name"
                                        required
                                    ></v-text-field>
                                    โรงตีพิมพ์/เว็บไซต์
                                    <v-text-field
                                        solo
                                        v-model="name"
                                        :rules="nameRules"
                                        label="Title name"
                                        required
                                    ></v-text-field
                                ></v-col>
                            </v-row>
                        </v-row>
                    </v-card>
                    <v-card>
                        <v-row>
                            <h3>ส่วนที่ 14 การนำงานวิจัยไปใช้ประโยชน์</h3>
                            <v-row>
                                <v-col cols="12" md="12">
                                    ที่ปรึกษางานวิจัย
                                    <v-text-field
                                        solo
                                        v-model="name"
                                        :rules="nameRules"
                                        label="Title name"
                                        required
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                        </v-row>
                    </v-card>
                    <v-card>
                        <v-row>
                            <h3>ส่วนที่ 15 การนำงานวิจัยไปอ้างอิง</h3>
                            <v-row
                                ><h5>การนำเสนองานวิจัย</h5>
                                <v-col cols="12" md="6">
                                    วันที่ถูกอ้างอิง
                                    <v-text-field
                                        solo
                                        v-model="name"
                                        :rules="nameRules"
                                        label="Title name"
                                        required
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" md="6">
                                    ชื่อผู้วิจัยที่นำไปใช้อ้างอิง
                                    <v-select
                                        solo
                                        v-model="name"
                                        :rules="nameRules"
                                        label="Title name"
                                        required
                                    ></v-select
                                ></v-col>
                                <v-col cols="12" md="12">
                                    ชื่อภาษาไทย/Research Name
                                    <v-text-field
                                        solo
                                        v-model="name"
                                        :rules="nameRules"
                                        label="Title name"
                                        required
                                    ></v-text-field></v-col
                                ><v-col cols="12" md="12">
                                    URL เชื่อมโยง
                                    <v-text-field
                                        solo
                                        v-model="name"
                                        :rules="nameRules"
                                        label="Title name"
                                        required
                                    ></v-text-field></v-col
                                ><v-col cols="12" md="12">
                                    การอ้างอิง/วารสารงาน(ที่ สกอ.ยอมรับ)
                                    <v-text-field
                                        solo
                                        v-model="name"
                                        :rules="nameRules"
                                        label="Title name"
                                        required
                                    ></v-text-field
                                ></v-col>
                            </v-row>
                        </v-row>
                    </v-card>
                    <v-card>
                        <v-row>
                            <h3>แนบไฟล์เอกสารอ้างอิง</h3>
                            <v-row>
                                <v-col cols="12" md="12">
                                    ที่ปรึกษางานวิจัย
                                    <v-file-input
                                        solo
                                        v-model="name"
                                        :rules="nameRules"
                                        label="File input"
                                        required
                                        multiple
                                        show-size
                                        counter
                                    ></v-file-input>
                                </v-col>
                            </v-row>
                        </v-row>
                        <v-row justify="space-around">
                            <v-card-text
                                style="height: 100px; position: relative"
                            >
                                <v-btn
                                    depressed
                                    right
                                    color="blue"
                                    dark
                                    absolute
                                    top
                                >
                                    บันทึก
                                </v-btn>
                            </v-card-text>
                        </v-row>
                    </v-card>
                </v-row>
            </v-container>
        </v-form>
    </div>
</template>

<script>
export default {
    name: "DashboardNotifications",

    data: () => ({
        items: ["Foo", "Bar", "Fizz", "Buzz"],
        status: ["กำลังดำเนินการ", "เสร็จสิ้น"],
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
