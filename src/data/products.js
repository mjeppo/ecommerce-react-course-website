const products = [
  {
    "id": 1,
    "name": "Samsung 27\" 4K Monitor",
    "price": 349.99,
    "image": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&h=500&fit=crop",
    "description": "Strak 27-inch 4K UHD-beeldscherm van Samsung met IPS-paneel, 60Hz verversingssnelheid en USB-C aansluiting. Ideaal voor thuiswerken en grafisch werk."
  },
  {
    "id": 2,
    "name": "LG 34\" Ultrawide Curved Monitor",
    "price": 599.99,
    "image": "https://images.unsplash.com/photo-1585792180666-f7347c490ee2?w=500&h=500&fit=crop",
    "description": "Gebogen ultrabreed 34-inch WQHD-beeldscherm van LG met 144Hz en 1ms responstijd. Perfect voor multitasking en gaming."
  },
  {
    "id": 3,
    "name": "Logitech MX Master 3 Muis",
    "price": 99.99,
    "image": "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=300&fit=crop",
    "description": "Ergonomische draadloze muis van Logitech met precisiescrollen, instelbare DPI en tot 70 dagen batterijduur. Geschikt voor Windows en macOS."
  },
  {
    "id": 4,
    "name": "Apple Magic Mouse",
    "price": 85.00,
    "image": "https://images.unsplash.com/photo-1645162541857-d03d39d46d17?w=500&h=500&fit=crop",
    "description": "Slanke draadloze muis van Apple met Multi-Touch oppervlak en naadloze scrollfunctie. Oplaadbaar via Lightning."
  },
  {
    "id": 5,
    "name": "HP LaserJet Pro Printer",
    "price": 249.00,
    "image": "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=500&h=500&fit=crop",
    "description": "Compacte laserprinter van HP met dubbelzijdig afdrukken, Wi-Fi en maandelijkse capaciteit tot 3.000 pagina's. Ideaal voor thuiskantoor."
  },
  {
    "id": 6,
    "name": "Canon PIXMA Inkjetprinter",
    "price": 119.95,
    "image": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop",
    "description": "Veelzijdige inkjetprinter van Canon met scan- en kopieerfunctie, randloze fotodruk en Wi-Fi connectiviteit."
  },
  {
    "id": 7,
    "name": "Apple MacBook Air M2",
    "price": 1299.00,
    "image": "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=500&h=500&fit=crop",
    "description": "Ultradunne laptop van Apple met de razendsnelle M2-chip, 8GB RAM en 256GB SSD. Geruisloos en tot 18 uur batterijduur."
  },
  {
    "id": 8,
    "name": "Dell XPS 15 Laptop",
    "price": 1749.00,
    "image": "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=500&h=500&fit=crop",
    "description": "Krachtige 15-inch laptop van Dell met Intel Core i7, 16GB RAM, 512GB SSD en OLED touchscreen. Geschikt voor professioneel gebruik."
  },
  {
    "id": 9,
    "name": "Logitech MK470 Toetsenbord & Muis Combo",
    "price": 69.99,
    "image": "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&h=500&fit=crop",
    "description": "Slanke draadloze toetsenbord-muiscombinatie van Logitech met stille toetsen, één USB-ontvanger en tot 36 maanden batterijduur."
  },
  {
    "id": 10,
    "name": "Keychron K2 Mechanisch Toetsenbord",
    "price": 89.00,
    "image": "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=500&h=500&fit=crop",
    "description": "Compact mechanisch toetsenbord met Bluetooth en USB-C, RGB-verlichting en hot-swappable schakelaars. Compatibel met Windows en macOS."
  },
  {
    "id": 11,
    "name": "Samsung 1TB Portable SSD",
    "price": 119.99,
    "image": "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500&h=500&fit=crop",
    "description": "Compacte externe SSD van Samsung met USB 3.2, leessnelheid tot 1.050 MB/s en schokbestendige behuizing."
  },
  {
    "id": 12,
    "name": "Western Digital 4TB Externe Harde Schijf",
    "price": 99.95,
    "image": "https://images.unsplash.com/photo-1531492746076-161ca9bcad58?w=500&h=500&fit=crop",
    "description": "Betrouwbare externe harde schijf van Western Digital met 4TB opslagcapaciteit, USB 3.0 en automatische back-upsoftware."
  },
  {
    "id": 13,
    "name": "Bose QuietComfort 45 Headset",
    "price": 329.00,
    "image": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    "description": "Premium over-ear hoofdtelefoon van Bose met actieve ruisonderdrukking, 24 uur batterijduur en transparantiemodus."
  },
  {
    "id": 14,
    "name": "Sony WH-1000XM5 Headset",
    "price": 379.00,
    "image": "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=500&h=500&fit=crop",
    "description": "Draadloze over-ear koptelefoon van Sony met de beste ruisonderdrukking in zijn klasse, 30 uur batterijduur en multipoint-verbinding."
  },
  {
    "id": 15,
    "name": "Jabra Evolve2 75 Headset",
    "price": 449.00,
    "image": "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&h=500&fit=crop",
    "description": "Professionele draadloze headset van Jabra met uitklapbare microfoonboom, ANC en geïntegreerde bezettingslamp voor thuiswerken."
  },
  {
    "id": 16,
    "name": "Webcam Logitech C920 HD Pro",
    "price": 89.99,
    "image": "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=500&h=500&fit=crop",
    "description": "Full HD 1080p webcam van Logitech met ingebouwde stereomicrofoon, automatische lichtcorrectie en plug-and-play installatie."
  },
  {
    "id": 17,
    "name": "Elgato Facecam Pro 4K Webcam",
    "price": 299.00,
    "image": "https://images.unsplash.com/photo-1623949556303-b0d17d198863?w=500&h=500&fit=crop",
    "description": "4K 60fps webcam van Elgato met Sony-sensor, geen compressie via USB 3.0 en uitgebreide belichtingsinstellingen via Camera Hub software."
  },
  {
    "id": 18,
    "name": "TP-Link Wi-Fi 6 Router",
    "price": 179.99,
    "image": "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?w=500&h=500&fit=crop",
    "description": "Dual-band Wi-Fi 6-router van TP-Link met snelheden tot 3.000 Mbps, OFDMA-technologie en eenvoudige installatie via de Tether-app."
  },
  {
    "id": 19,
    "name": "Raspberry Pi 5 (8GB)",
    "price": 89.95,
    "image": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=500&fit=crop",
    "description": "Krachtige minicomputer met 8GB RAM, quad-core ARM Cortex-A76 processor, dual 4K HDMI-uitgang en PCIe-connector voor uitbreiding."
  },
  {
    "id": 20,
    "name": "Anker 100W USB-C Oplader (GaN)",
    "price": 54.99,
    "image": "https://images.unsplash.com/photo-1625895197185-efcec01cffe0?w=500&h=500&fit=crop",
    "description": "Compacte GaN-oplader van Anker met 100W vermogen, 4 poorten (USB-C en USB-A) en PowerIQ 3.0 voor optimale laadsnelheid."
  },
  {
    "id": 21,
    "name": "Belkin 12-Poorts USB-Hub",
    "price": 79.99,
    "image": "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=500&h=500&fit=crop",
    "description": "Bureaubladhub van Belkin met USB-A 3.0, USB-C en SD-kaartlezer. Ideaal om meerdere randapparaten tegelijk op één laptop aan te sluiten."
  },
  {
    "id": 22,
    "name": "Corsair K70 RGB Gaming Toetsenbord",
    "price": 159.99,
    "image": "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=500&h=500&fit=crop",
    "description": "Full-size gaming toetsenbord van Corsair met Cherry MX-schakelaars, per toets instelbare RGB-verlichting en aluminium behuizing."
  },
  {
    "id": 23,
    "name": "Razer DeathAdder V3 Gaming Muis",
    "price": 79.99,
    "image": "https://images.unsplash.com/photo-1563297007-0686b7003af7?w=500&h=500&fit=crop",
    "description": "Ergonomische bedrade gaming muis van Razer met Focus Pro 30K-sensor, 90 uur batterijduur (draadloze versie) en ultralight 63g ontwerp."
  },
  {
    "id": 24,
    "name": "iPad Pro 11\" (M4)",
    "price": 1099.00,
    "image": "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&h=500&fit=crop",
    "description": "Krachtige tablet van Apple met M4-chip, Ultra Retina XDR-display, Apple Pencil Pro-ondersteuning en tot 10 uur batterijduur."
  },
  {
    "id": 25,
    "name": "Wacom Intuos Pro Tekentablet",
    "price": 379.00,
    "image": "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=500&h=500&fit=crop",
    "description": "Professioneel tekentablet van Wacom (M-formaat) met 8.192 drukgevoeligheidsniveaus, draadloze connectiviteit en Express Keys."
  },
  {
    "id": 26,
    "name": "Philips Hue Sync Box (HDMI)",
    "price": 249.95,
    "image": "https://images.unsplash.com/photo-1558002038-bb4237bb51d4?w=500&h=500&fit=crop",
    "description": "HDMI-synchronisatiebox van Philips Hue die Ambilight-achtige lichteffecten synchroniseert met je televisie- of gamingcontent in real time."
  },
  {
    "id": 27,
    "name": "Elgato Stream Deck MK.2",
    "price": 149.99,
    "image": "https://images.unsplash.com/photo-1655721530791-37e70a3f4c9b?w=500&h=500&fit=crop",
    "description": "LCD-hotkey-controller van Elgato met 15 aanpasbare knoppen, plugin-ecosysteem en ondersteuning voor OBS, Zoom, Spotify en meer."
  },
  {
    "id": 28,
    "name": "SteelSeries Arctis Nova Pro Headset",
    "price": 349.99,
    "image": "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&h=500&fit=crop",
    "description": "Premium gaming headset van SteelSeries met actieve ruisonderdrukking, hot-swap accu's en ondersteuning voor meerdere platforms tegelijk."
  },
  {
    "id": 29,
    "name": "Synology DS923+ NAS",
    "price": 699.00,
    "image": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=500&fit=crop",
    "description": "4-bay NAS-server van Synology met AMD Ryzen R1600 dual-core, 4GB ECC RAM, 10GbE-ondersteuning en DiskStation Manager software."
  },
  {
    "id": 30,
    "name": "Rode NT-USB Mini Microfoon",
    "price": 99.00,
    "image": "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=500&h=500&fit=crop",
    "description": "Compacte USB-condensatormicrofoon van Rode met cardioïde poolpatroon, ingebouwde hoofdtelefoonuitgang en magnetische bureaustandaard."
  }
]


export function getProducts() {
  return products;
}