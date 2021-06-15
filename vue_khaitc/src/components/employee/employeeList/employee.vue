<template src="./employee.html">
</template>

<script>
export default {
  name: "employee",
  data: () => ({
    search: '',
    dialog: false,
    dialogDelete: false,
    gender: ['Trai', 'Gái'],
    headers: [
      {text: 'Tên nhân viên', value: 'name', align: 'start', sortable: false},
      {text: 'Giới tính', value: 'gender'},
      {text: 'Tuổi', value: 'age'},
      {text: 'Quê quán', value: 'places'},
      {text: 'Chức vụ', value: 'position', sortable: false},
      {text: 'Tác vụ', value: 'actions', sortable: false},
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      name: '',
      gender: '',
      age: 0,
      places: '',
      position: '',
    },
    defaultItem: {
      name: '',
      gender: '',
      age: 0,
      places: '',
      position: '',
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'Thêm nhân viên' : 'Sửa thông tin'
    },
  },

  watch: {
    dialog(val) {
      val || this.close()
    },
    dialogDelete(val) {
      val || this.closeDelete()
    },
  },

  created() {
    this.initialize()
  },

  methods: {
    initialize() {
      this.desserts = [
        {
          name: 'Frozen Yogurt',
          gender: 'Gái',
          age: 22,
          places: 'Hưng Yên',
          position: 'DEV',
        },
        {
          name: 'Ice cream sandwich',
          gender: 'Trai',
          age: 30,
          places: 'Nam Định',
          position: 'PM',
        },
        {
          name: 'Eclair',
          gender: 'Trai',
          age: 18,
          places: 'Quảng Trị',
          position: 'INTERN',
        },
        {
          name: 'Cupcake',
          gender: 'Trai',
          age: 25,
          places: 'Nghệ An',
          position: 'FRESHER',
        },
        {
          name: 'Gingerbread',
          gender: 'Gái',
          age: 26,
          places: 'Hà Nội',
          position: 'TESTER',
        },
        {
          name: 'Jelly bean',
          gender: 'Gái',
          age: 31,
          places: 'Hồ Chí Minh',
          position: 'PO',
        },
        {
          name: 'Lollipop',
          gender: 'Trai',
          age: 21,
          places: 'Ninh Bình',
          position: 'HR',
        },
        {
          name: 'Honeycomb',
          gender: 'Trai',
          age: 23,
          places: 'Thanh Hoá',
          position: 'SELL',
        },
        {
          name: 'Donut',
          gender: 'Trai',
          age: 25,
          places: 'Hà Tĩnh',
          position: 'DEV',
        },
        {
          name: 'KitKat',
          gender: 'Trai',
          age: 35,
          places: 'Hà Nam',
          position: 'QC',
        },
      ]
    },

    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem(item) {
      this.editedIndex = this.desserts.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    deleteItemConfirm() {
      this.desserts.splice(this.editedIndex, 1)
      this.closeDelete()
    },

    close() {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    closeDelete() {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.desserts[this.editedIndex], this.editedItem)
      } else {
        this.desserts.push(this.editedItem)
      }
      this.close()
    },
  },
}
</script>

<style src="./employee.scss" lang="scss" scoped>
</style>