<template>
    <div class="add">
        <ValidationObserver v-slot="{ handleSubmit }">
            <form action="" @submit.prevent="handleSubmit(onSubmit)">
                <ValidationProvider rules="required|min" v-slot="{ errors }">
                    <input v-model="data.name" type="text" placeholder="Name">
                    <div>{{ errors[0] }}</div>
                </ValidationProvider>
                <br><br>
                <ValidationProvider rules="required" v-slot="{ errors }">
                    <select name="" id="" v-model="data.year">
                        <option :value="year" v-for="year in years" :key="year">
                            {{ year }}
                        </option>
                    </select>
                    <input type="hidden" name="value" :value="data.year.value">
                    <div>{{ errors[0] }}</div>
                </ValidationProvider>
                <br><br>
                <ValidationProvider rules="required" v-slot="{ errors }">
                    <select name="" id="" v-model="data.level">
                        <option :value="level" v-for="level in levels" :key="level">
                            {{ level }}
                        </option>
                    </select>
                    <input type="hidden" name="value" :value="data.level.value">
                    <div>{{ errors[0] }}</div>
                </ValidationProvider>
                <br><br>
                <ValidationProvider v-slot="{ errors }">
                    <input v-model="data.avatar" type="text" placeholder="Link ảnh">
                    <div>{{ errors[0] }}</div>
                </ValidationProvider>
                <br><br>
                <v-btn type="submit">
                    Them thanh vien
                </v-btn>
            </form>
        </ValidationObserver>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Emit } from "vue-property-decorator";
import { extend } from 'vee-validate'

extend('required', {
    validate(value) {
        return {
            required: true,
            valid: ['', null, undefined].indexOf(value) === -1
        }
    },
    message: 'Nhap vao ?',
    computesRequired: true
})

extend('min', {
    validate(value: string) {
        return {
            valid: value.length >= 6
        }
    },
    message: 'toi thieu 6 ky tu',
})

@Component
export default class Add extends Vue {
  data: any = {
    name: "",
    avatar: "",
    year: 2021,
    isWorking: true,
    level: ""
  };

    levels = [
        'level 1',
        'level 2',
        'level 3',
        'level 4',
        'level 5',
        'level 6',
        'level 7',
        'level 8',
        'level 9',
        'level 10',
    ]


  get years() {
      const year = new Date().getFullYear()
      return Array.from({length: year - 1900}, (value, index) => 1901 + index)
  }

  @Emit('data') onSubmit(e: any) {
      return {
          name: this.data.name,
          seniority: this.data.year,
          isWorking: true,
          avatar: this.data.avatar,
          level: this.data.level
      }
  }

}
</script>

<style scoped>
input {
  background: #ccc;
  color: white;
  padding: 20px;
  width: 300px;
}
.form-group {
  margin: 10px 0;
}
.year {
    width: 200px;
    background: #CCC;
}
.add {
    margin: 100px 0;
}
select {
    width: 300px;
    padding: 20px;
    background: #CCC;
}
</style>
