export default {
  name: 'MyComponent',
  data () {
    return {
      message: "Ceci est un message dynamique",
      isRotating: false
    }
  },
  template: `
    <h1>
      <span @click="rotateText">{{ message }}</span>
    </h1>
  `,
  methods: {
    rotateText () {
      this.isRotating = true;
      setTimeout(() => {
        this.isRotating = false;
      }, 1000);
    }
  }
};