const facts = [
  "Medus nekad nebojājas — arheologi senajās kapenēs atraduši ēdamu medu!",
  "Astoņkājiem ir trīs sirdis.",
  "Banāni ir nedaudz radioaktīvi kālija-40 dēļ.",
  "Ūdens var vārīties un sasalt vienlaikus - to sauc par trīskāršo punktu.",
  "Haizivis pastāvēja pirms kokiem.",
  "Eifeļa tornis vasarā var būt par 15 cm augstāks termiskās izplešanās dēļ.",
  "70% Zemes virsmas klāj ūdens, bet tikai apmēram 3% no tā ir saldūdens.",
  "Amazones lietusmeži saražo apmēram 20% pasaules skābekļa – tos bieži sauc par “Zemes plaušām”",
  "Zeme nav pilnīgi apaļa – tā ir nedaudz saplacināta pie poliem un izspiedusies pie ekvatora (to sauc par oblāto sfēroidu)",
  "Tuksneši var būt arī auksti – Antarktīda ir tehniski sausākais un aukstākais tuksnesis uz Zemes",
  "Sahāras tuksnesis kļūst arvien lielāks – tas izplešas apmēram par 30 jūdzēm (48 km) gadā",
  "Zemi ik sekundi piemeklē apmēram 100 zibens spērienu – tas ir gandrīz 8,6 miljoni reižu dienā",
  "Islandē nav odu – aukstais klimats un pastāvīga tekoša ūdens trūkums tiem neļauj izdzīvot",
  "Okeānā ir “neatgriešanās punkts” – to sauc par Nemo punktu, un tas ir vistālāk no jebkuras sauszemes, vairāk nekā 1400 jūdžu (2253km) attālumā",
  "Daži kalni atrodas zem ūdens – Mauna Kea Havaju salās ir augstāks par Everestu, ja to mēra no okeāna dibena",
  "Uz Zemes ir vairāk koku nekā zvaigžņu Piena Ceļā — vairāk nekā 3 triljoni koku, salīdzinot ar aptuveni 100–400 miljardiem zvaigžņu",
 
];

document.getElementById("factButton").addEventListener("click", () => {
  const fact = facts[Math.floor(Math.random() * facts.length)];
  document.getElementById("factDisplay").textContent = fact;
});
