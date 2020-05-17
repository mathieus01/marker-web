import moment from "moment";
export default class Util {
  static stringToDate(date) {
    if (!date) return null;
    const [day, month, year] = date.split("/");

    return new Date(year, month - 1, day);
  }

  static dateToString(date) {
    moment(date).format("DD/MM/YYYY");
  }

  static genders() {
    const genders = [
      { label: "Masculino", value: "M" },
      { label: "Feminino", value: "F" },
      { label: "Outros", value: "O" }
    ];

    return genders;
  }

  static surgeryTypes() {
    const types = [
      { label: "Emergencia", value: "0" },
      { label: "Eletiva", value: "1" }
    ];
    return types;
  }

  static surgeryToAppoitments(surgeries) {
    return surgeries.map(surgery => {
      return {
        title: surgery.patient.name,
        startDate: surgery.date,
        endDate: moment(surgery.date).add(2, "hour"),
        id: surgery.id,
        location: surgery.location
      };
    });
  }
}
