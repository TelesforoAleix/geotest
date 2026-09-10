const comarques = [
    {
      "comarca": "Alt Camp",
      "capital": "Valls",
      "provincia": "Tarragona",
      "municipis": 23,
      "poblacio": 46076
    },
    {
      "comarca": "Alt Empordà",
      "capital": "Figueres",
      "provincia": "Girona",
      "municipis": 68,
      "poblacio": 146766
    },
    {
      "comarca": "Alt Penedès",
      "capital": "Vilafranca del Penedès",
      "provincia": "Barcelona",
      "municipis": 27,
      "poblacio": 112460
    },
    {
      "comarca": "Alt Urgell",
      "capital": "Seu d'Urgell, la",
      "provincia": "Lleida",
      "municipis": 19,
      "poblacio": 20762
    },
    {
      "comarca": "Alta Ribagorça",
      "capital": "Pont de Suert, el",
      "provincia": "Lleida",
      "municipis": 3,
      "poblacio": 4019
    },
    {
      "comarca": "Anoia",
      "capital": "Igualada",
      "provincia": "Barcelona",
      "municipis": 33,
      "poblacio": 126752
    },
    {
      "comarca": "Aran",
      "capital": "Vielha e Mijaran",
      "provincia": "Lleida",
      "municipis": 9,
      "poblacio": 10496
    },
    {
      "comarca": "Bages",
      "capital": "Manresa",
      "provincia": "Barcelona",
      "municipis": 30,
      "poblacio": 183265
    },
    {
      "comarca": "Baix Camp",
      "capital": "Reus",
      "provincia": "Tarragona",
      "municipis": 28,
      "poblacio": 201647
    },
    {
      "comarca": "Baix Ebre",
      "capital": "Tortosa",
      "provincia": "Tarragona",
      "municipis": 14,
      "poblacio": 81334
    },
    {
      "comarca": "Baix Empordà",
      "capital": "Bisbal d'Empordà, la",
      "provincia": "Girona",
      "municipis": 36,
      "poblacio": 141329
    },
    {
      "comarca": "Baix Llobregat",
      "capital": "St. Feliu de Llobregat",
      "provincia": "Barcelona",
      "municipis": 30,
      "poblacio": 840572
    },
    {
      "comarca": "Baix Penedès",
      "capital": "Vendrell, el",
      "provincia": "Tarragona",
      "municipis": 14,
      "poblacio": 115701
    },
    {
      "comarca": "Barcelonès",
      "capital": "Barcelona",
      "provincia": "Barcelona",
      "municipis": 5,
      "poblacio": 2313975
    },
    {
      "comarca": "Berguedà",
      "capital": "Berga",
      "provincia": "Barcelona/Lleida (1)",
      "municipis": 31,
      "poblacio": 40618
    },
    {
      "comarca": "Cerdanya",
      "capital": "Puigcerdà",
      "provincia": "Girona/Lleida (2)",
      "municipis": 17,
      "poblacio": 19885
    },
    {
      "comarca": "Conca de Barberà",
      "capital": "Montblanc",
      "provincia": "Tarragona",
      "municipis": 22,
      "poblacio": 20480
    },
    {
      "comarca": "Garraf",
      "capital": "Vilanova i la Geltrú",
      "provincia": "Barcelona",
      "municipis": 6,
      "poblacio": 159124
    },
    {
      "comarca": "Garrigues",
      "capital": "Borges Blanques, les",
      "provincia": "Lleida",
      "municipis": 24,
      "poblacio": 18935
    },
    {
      "comarca": "Garrotxa",
      "capital": "Olot",
      "provincia": "Girona",
      "municipis": 21,
      "poblacio": 61363
    },
    {
      "comarca": "Gironès",
      "capital": "Girona",
      "provincia": "Girona",
      "municipis": 27,
      "poblacio": 201615
    },
    {
      "comarca": "Maresme",
      "capital": "Mataró",
      "provincia": "Barcelona",
      "municipis": 30,
      "poblacio": 467398
    },
    {
      "comarca": "Moianès",
      "capital": "Moià",
      "provincia": "Barcelona",
      "municipis": 10,
      "poblacio": 14668
    },
    {
      "comarca": "Montsià",
      "capital": "Amposta",
      "provincia": "Tarragona",
      "municipis": 12,
      "poblacio": 70244
    },
    {
      "comarca": "Noguera",
      "capital": "Balaguer",
      "provincia": "Lleida",
      "municipis": 30,
      "poblacio": 39567
    },
    {
      "comarca": "Osona",
      "capital": "Vic",
      "provincia": "Barcelona/Girona (3)",
      "municipis": 50,
      "poblacio": 167506
    },
    {
      "comarca": "Pallars Jussà",
      "capital": "Tremp",
      "provincia": "Lleida",
      "municipis": 14,
      "poblacio": 13409
    },
    {
      "comarca": "Pallars Sobirà",
      "capital": "Sort",
      "provincia": "Lleida",
      "municipis": 15,
      "poblacio": 7288
    },
    {
      "comarca": "Pla d'Urgell",
      "capital": "Mollerussa",
      "provincia": "Lleida",
      "municipis": 16,
      "poblacio": 37737
    },
    {
      "comarca": "Pla de l'Estany",
      "capital": "Banyoles",
      "provincia": "Girona",
      "municipis": 11,
      "poblacio": 33194
    },
    {
      "comarca": "Priorat",
      "capital": "Falset",
      "provincia": "Tarragona",
      "municipis": 23,
      "poblacio": 9360
    },
    {
      "comarca": "Ribera d'Ebre",
      "capital": "Móra d'Ebre",
      "provincia": "Tarragona",
      "municipis": 14,
      "poblacio": 22040
    },
    {
      "comarca": "Ripollès",
      "capital": "Ripoll",
      "provincia": "Girona",
      "municipis": 19,
      "poblacio": 25780
    },
    {
      "comarca": "Segarra",
      "capital": "Cervera",
      "provincia": "Lleida",
      "municipis": 21,
      "poblacio": 23938
    },
    {
      "comarca": "Segrià",
      "capital": "Lleida",
      "provincia": "Lleida",
      "municipis": 38,
      "poblacio": 215476
    },
    {
      "comarca": "Selva",
      "capital": "Sta. Coloma de Farners",
      "provincia": "Girona/Barcelona (4)",
      "municipis": 26,
      "poblacio": 182614
    },
    {
      "comarca": "Solsonès",
      "capital": "Solsona",
      "provincia": "Lleida",
      "municipis": 15,
      "poblacio": 13725
    },
    {
      "comarca": "Tarragonès",
      "capital": "Tarragona",
      "provincia": "Tarragona",
      "municipis": 22,
      "poblacio": 270237
    },
    {
      "comarca": "Terra Alta",
      "capital": "Gandesa",
      "provincia": "Tarragona",
      "municipis": 12,
      "poblacio": 11473
    },
    {
      "comarca": "Urgell",
      "capital": "Tàrrega",
      "provincia": "Lleida",
      "municipis": 20,
      "poblacio": 37960
    },
    {
      "comarca": "Vallès Occidental",
      "capital": "Sabadell i Terrassa",
      "provincia": "Barcelona",
      "municipis": 23,
      "poblacio": 949026
    },
    {
      "comarca": "Vallès Oriental",
      "capital": "Granollers",
      "provincia": "Barcelona",
      "municipis": 39,
      "poblacio": 422149
    }
  ];

  export default comarques;