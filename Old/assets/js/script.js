const vm = new Vue({
  el: "#root",
  data() {
    return {
      message: "Bonjour",
      cls: "alert-success",
      guide: "Aller sur ce site",
      link: "https://www.grafikart.fr",
      success: true,
      persons: ["Marion", "Jean", "Patrick", "Gloire", "Lionge"],
      alert: "Bravo votre enregistrement a marcher",
    };
  },
  methods: {
    close() {
      this.success = !this.success;
      this.message = this.success ? "Ouvert" : "Fermer";
      this.alert = this.success
        ? "Bravo votre enregistrement a marcher"
        : "Votre enregistrement a echouer";
    },
    getValue(value) {
      this.message = value;
    },
    addPerson() {
      if (!this.persons.includes("Ndekocode")) {
        this.persons.push("Ndekocode");
      }
    },
  },
});
