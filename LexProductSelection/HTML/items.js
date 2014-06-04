
function createItems()
{
    items = new Array();
    
    items[0] = null;
    items[1] = {choices:["Yes","No"],choiceLink:[2,19],question:"Will the device be used in printing?",description:"If the application only requires scanning, select 'NO'."};
    items[2] = {choices:["Yes","No"],choiceLink:[4,3],question:"Will print in paper larger than A4 or Legal (8.5\" x 14\")?",description:"Examples of larger formats are Tabloid / Ledger (11\" x 17\") and A3 (297 x 420 mm)."};
    items[3] = {choices:["Yes","No"],choiceLink:[9,14],question:"Is printing in color a requirement?",description:"Consider multiple applications for color in communications, including signage, invoices, letters, memoranda, and statements."};
    items[4] = {choices:["Yes","No"],choiceLink:[5,8],question:"Is printing in color a requirement?",description:"Consider multiple applications for color in communications, including signage, invoices, letters, memoranda, and statements."};
    items[5] = {choices:["Yes","No"],choiceLink:[6,7],question:"Any need for finishing capability?",description:"Finishing options include staple, hole punch, mailbox, or output stacker."};
    items[6] = {choices:["Yes","No"],choiceLink:[113,114],question:"Need copying or scanning documents?",description:"If the application only involves printing, select 'NO'. For a multi-function device (print, copy, scan and/or fax), select 'YES'."};
    items[7] = {choices:["Yes","No"],choiceLink:[22,23],question:"Need copying or scanning documents?",description:"If the application only involves printing, select 'NO'. For a multi-function device (print, copy, scan and/or fax), select 'YES'."};
    items[8] = {choices:["Yes","No"],choiceLink:[106,105],question:"Need copying or scanning documents?",description:"If the application only involves printing, select 'NO'. For a multi-function device (print, copy, scan and/or fax), select 'YES'."};
    items[9] = {choices:["Yes","No"],choiceLink:[10,11],question:"Need copying or scanning documents?",description:"If the application only involves printing, select 'NO'. For a multi-function device (print, copy, scan and/or fax), select 'YES'."};
    items[10] = {choices:["Yes","No"],choiceLink:[115,12],question:"Any need for finishing capability?",description:"Finishing options include staple, hole punch, mailbox, or output stacker."};
    items[11] = {choices:["Yes","No"],choiceLink:[116,13],question:"Any need for finishing capability?",description:"Finishing options include staple, hole punch, mailbox, or output stacker."};
    items[12] = {choices:["<3K","3-6K",">6K"],choiceLink:[24,25,152],question:"On average, how many pages will the device print per month?",description:"A sheet printed on both sides counts as two pages."};
    items[13] = {choices:["<3K","3-6K",">6K"],choiceLink:[26,27,123],question:"On average, how many pages will the device print per month?",description:"A sheet printed on both sides counts as two pages."};
    items[14] = {choices:["Yes","No"],choiceLink:[131,15],question:"Does the application involve frequent printing on special media or narrow media?",description:"Examples are vinyl labels or display inserts, outdoor (polyester) media, and narrow formats such as ID cards, envelopes, wristbands, post cards."};
    items[15] = {choices:["Yes","No"],choiceLink:[16,17],question:"Need copying or scanning documents?",description:"If the application only involves printing, select 'NO'. For a multi-function device (print, copy, scan and/or fax), select 'YES'."};
    /* START 20140429 Ace
     * changed items[16] "No" mapping from 17 to 34
     * changed items[17] choices from "Small","Medium","Large" to "<3K","3-6K","6K"
     * changed items[17] question from "Does the customer need Scanning capability?" to "On average, how many pages will the device print per month?"
     * added items[17] desciption "A sheet printed on both sides counts as two pages."
     */
    items[16] = {choices:["Yes","No"],choiceLink:[28,34],question:"Any need for finishing capability?",description:"Finishing options include staple, hole punch, mailbox, or output stacker."};
    /* END 20140429 Ace */
    items[17] = {choices:["Small","Medium","Large"],choiceLink:[32,33,133],question:"A sheet printed on both sides counts as two pages."};
    items[18] = {choices:["Yes","No"],choiceLink:[31,143],question:"Is an analog fax card required?",description:"Lexmark's fax-equipped models offer the same features than a dedicated fax-machine. All eSF models support FoIP."};
    items[19] = {choices:["Yes","No"],choiceLink:[20,100],question:"Will the device run Lexmark or Perceptive software solutions?",description:"Fujitsu scanners have a variety of 3rd party software solutions that can run solutions"};
    items[20] = {choices:["One person","A workgroup"],choiceLink:[101,21],question:"How many people will operate the scanner?",description:"The number of users that will operate the scanner will help determine the need for the class of device needed"};
    items[21] = {choices:["4K","4k-15K","15k-60K"],choiceLink:[102,103,104],question:"Does the customer need a scanner for occasional use, continuous use, or somewhere between?",description:"Fujitsu has Workgroup, departmental and production scanners to meet all your scanning needs"};
    //lance kwan
    items[22] = {choices:["X925de","X950 Series"],choiceLink:[117,118],question:"Lexmark Recommends",description:"Below are our recommended printers"};
    /* START 20140429 Ace
     * changed items[23] from C950de Series to C950de
     */
    items[23] = {choices:["C925 Series","C950de"],choiceLink:[119,120],question:"Lexmark Recommends",description:"Below are our recommended printers"};
    /* END 20140429 Ace */
    items[24] = {choices:["CX310 Series","CX410 Series"],choiceLink:[126,128],question:"Lexmark Recommends",description:"Below are our recommended printers"};
    items[25] = {choices:["CX510 Series","X740 Series"],choiceLink:[130,129],question:"Lexmark Recommends",description:"Below are our recommended printers"};
    items[26] = {choices:["CS310 Series","CS410 Series"],choiceLink:[125,124],question:"Lexmark Recommends",description:"Below are our recommended printers"};
    items[27] = {choices:["CS510 Series","C740 Series"],choiceLink:[121,122],question:"Lexmark Recommends",description:"Below are our recommended printers"};
    /* START 20140429 Ace
     * changed items[28] "MX810 Series" mapping from 133 to 110
     */
    items[28] = {choices:["MX610 Series","MX810 Series"],choiceLink:[109,110],question:"Lexmark Recommends",description:"Below are our recommended printers"};
    /* END 20140429 Ace */
    items[29] = {choices:["MX310 Series","MX410 Series"],choiceLink:[137,138],question:"Lexmark Recommends",description:"Below are our recommended printers"};
    items[30] = {choices:["MX710 Series","MX810 Series","MS810+MS6500e"],choiceLink:[153,141,142],question:"Lexmark Recommends",description:"Below are our recommended printers"};
    items[31] = {choices:["MX511","MX610 Series"],choiceLink:[139,109],question:"Lexmark Recommends",description:"Below are our recommended printers"};
    items[32] = {choices:["MS310 Series","MS410 Series"],choiceLink:[145,146],question:"Lexmark Recommends",description:"Below are our recommended printers"};
    items[33] = {choices:["MS510 Series","MS610 Series"],choiceLink:[147,148],question:"Lexmark Recommends",description:"Below are our recommended printers"};
    /* START 20140429 Ace
     * added items[34] correct branch option for Y-N-N-N-Y-N
     */
    items[34] = {choices:["<3K","3-6K","6K"],choiceLink:[29,18,30],description:"A sheet printed on both sides counts as two pages."};
    /* END 20140429 Ace */
    //lancekwan

    //final display
    /* START 20140429 Ace
     * added productSpecs and productBrochure for all items
     * updated productImage and productDescription for all items
     * uncommented items[113]
     * changed items[113] from X95x to X950 Series
     * changed items[114] from C950 to C950de
     * changed items[115] from X792 to X790 Series
     * changed items[116] from C792 to C790 Series
     * changed items[117] from X925de Series to X925de
     * changed items[118] from X95x to X950 Series
     * changed items[119] from C925 to C925 Series
     * changed items[120] from C950 to C950de
     * changed items[121] from CS51x to CS510 Series
     * changed items[122] from C74x to C740 Series
     * changed items[123] from C792 to C790 Series
     * changed items[124] from CS41x to CS410 Series
     * changed items[125] from CS31x to CS310 Series
     * changed items[126] from CX31x to CX310 Series
     * changed items[128] from CX41x to CX410 Series
     * changed items[129] from X74x to X740 Series
     * changed items[130] from CX51x to CX510 Series
     * changed items[131] from MS710 to MS710 Series
     * changed items[142] from MX6500e + MS81x to MS810 Series + MX6500e
     * changed items[143] from MX510 to MX510 Series
     * changed items[145] from MS310 to MS310 Series
     * changed items[146] from MS410 to MS410 Series
     * changed items[147] from MS510 to MS510 Series
     * changed items[148] from MS610 to MS610 Series
     * changed items[149] from MS810 to MS810 Series
     * changed items[152] from X790 to X790 Series
     */
    items[100] = {productName:null,productImage:null,productDescription:null,productSpecs:null,productBrochure:null};
    items[101] = {productName:"ScanSnap N-1800",productImage:"ScanSnap-N-1800.jpg",productDescription:"Fast scanning speeds of 20 pages per minute and true double-sided speeds of 40 images per minute in color, grayscale or black & white @ 300 dpi",productSpecs:"Specs-ScanSnap-N-1800.pdf",productBrochure:"http://www.fujitsu.com/downloads/COMP/fel/scanners/documents/brochures/n1800-eng-brochure.pdf"};
    items[102] = {productName:"Featured Device FI-6130Z",productImage:"FI-6130Z.jpg",productDescription:"Best in its class in cost performance",productSpecs:"Specs-FI-6130Z.pdf",productBrochure:"http://www.fujitsu.com/downloads/COMP/fcpa/scanners/fi-6x30z_datasheet.pdf"};
    items[103] = {productName:"Featured Device FI-6670",productImage:"FI-6670.jpg",productDescription:"Ability to continuously scan 200 sheet mixed batch documents containing paper of different weights, quality and sizes enables both of these scanners to efficiently digitize large volumes of documents",productSpecs:"Specs-FI-6670.pdf",productBrochure:"http://www.fujitsu.com/downloads/COMP/fcpa/scanners/fi-6x70_datasheet.pdf"};
    items[104] = {productName:"Featured Device FI-6800",productImage:"FI-6800.jpg",productDescription:"Utilizing a high quality lens and extra-bright LED light source enclosed in heavy-duty resin frame, fi-6800’s new compact design makes it the smallest in its class",productSpecs:"Specs-FI-6800.pdf",productBrochure:"http://www.fujitsu.com/downloads/COMP/fcpa/scanners/fi-6800_datasheet.pdf"};
    items[105] = {productName:"W850 Series",productImage:"W850dn.jpg",productDescription:"A powerful A3 monochrome solution, the Lexmark W850dn with duplex gives you rapid printing up to 50 ppm, plus a wide range of options",productSpecs:"Specs-W850-Series.pdf",productBrochure:"http://media.lexmark.com/www/doc/en_US/Lexmark-W850dn.pdf"};
    items[106] = {productName:"X860 Series",productImage:"X864dhe.jpg",productDescription:"Powerful multifunction device supports media sizes up to 11 x 17 inches (tabloid) and delivers print and copy speeds as fast as 55 pages per minute",productSpecs:"Specs-X860-Series.pdf",productBrochure:"http://media.lexmark.com/www/doc/en_US/Lexmark-X864dhe-4.pdf"};
    items[107] = {productName:"MS710 Series",productImage:"MS710-Series.png",productDescription:"Ideal for specialty vinyl and batched narrow media printing applications.",productSpecs:"Specs-MX710-Series.pdf",productBrochure:"http://media.lexmark.com/www/doc/en_US/Lexmark-MS710.pdf"};
    items[108] = {productName:"MX611",productImage:"MX710-MX610-Series.png",productDescription:"PA device busy medium workgroups can trust: up to 50 ppm print and copy, plus a fast, robust ADF",productSpecs:"Specs-MX610-Series.pdf",productBrochure:"http://media.lexmark.com/www/doc/en_US/Lexmark-MX610-MX611.pdf"};
    items[109] = {productName:"MX610 Series",productImage:"MX710-MX610-Series.png",productDescription:"Print and copy speeds up to 50 ppm, plus 20k-page cartridges make this Smart MFP ideal for medium workgroups",productSpecs:"Specs-MX610-Series.pdf",productBrochure:"http://media.lexmark.com/www/doc/en_US/Lexmark-MX610-MX611.pdf"};
    items[110] = {productName:"MX810 Series",productImage:"MX810-Series.png",productDescription:"70 ppm, extra high yield cartridges, and RMPV as high as 35K pages make this the ideal device for large workgroups and high volume applications.",productSpecs:"Specs-MX810-Series.pdf",productBrochure:"http://media.lexmark.com/www/doc/en_US/Lexmark-MX810-MX811-MX812.pdf"};
    items[111] = {productName:"MX811",productImage:"MX810-Series.png",productDescription:"70 ppm, extra high yield cartridges, and RMPV as high as 35K pages make this the ideal device for large workgroups and high volume applications.",productSpecs:"Specs-MX810-Series.pdf",productBrochure:"http://media.lexmark.com/www/doc/en_US/Lexmark-MX810-MX811-MX812.pdf"};
    items[112] = {productName:"MX812",productImage:"MX810-Series.png",productDescription:"70 ppm, extra high yield cartridges, and RMPV as high as 35K pages make this the ideal device for large workgroups and high volume applications.",productSpecs:"Specs-MX810-Series.pdf",productBrochure:"http://media.lexmark.com/www/doc/en_US/Lexmark-MX810-MX811-MX812.pdf"};
    items[113] = {productName:"X950 Series",productImage:"X950de.jpg",productDescription:"High-performance A3 color functionality, flexible features, easy-to-use workflow solutions and advanced security",productSpecs:"Specs-X950-Series.pdf",productBrochure:"http://media.lexmark.com/www/doc/en_US/Lexmark-X950.pdf"};
    items[114] = {productName:"C950de",productImage:"C950de.jpg",productDescription:"Easily create professional output in-house with flexible finishing options, including multi-position stapling, hole punch, expanded output stacking, and booklet capability",productSpecs:"Specs-C950-Series.pdf",productBrochure:"http://media.lexmark.com/www/doc/en_US/Lexmark-C950.pdf"};
    items[115] = {productName:"X790 Series",productImage:"X790-Series.png",productDescription:"Color Touch Screen with Solutions, Advanced Media Handling and Brilliant Color Documents",productSpecs:"Specs-X790-Series.pdf",productBrochure:"http://media.lexmark.com/www/doc/en_US/Lexmark-X792.pdf"};
    items[116] = {productName:"C790 Series",productImage:"C790-Series.png",productDescription:"Color Touch Screen with Solutions, Advanced Media Handling and Brilliant Color Documents",productSpecs:"Specs-C790-Series.pdf",productBrochure:"http://media.lexmark.com/www/doc/en_US/Lexmark-C792.pdf"};
    items[117] = {productName:"X925de",productImage:"X925de.png",productDescription:"Affordable A3 and color functionality for your busy workgroup through easy-to-use features, productivity solutions and a compact design",productSpecs:"Specs-X925de.pdf",productBrochure:"http://www.bmc-inc.com/pdf/lexmark/Lexmark-X925de.pdf"};
    items[118] = {productName:"X950 Series",productImage:"X950de.jpg",productDescription:"High-performance A3 color functionality, flexible features, easy-to-use workflow solutions and advanced security",productSpecs:"Specs-X950-Series.pdf",productBrochure:"http://media.lexmark.com/www/doc/en_US/Lexmark-X950.pdf"};
    items[119] = {productName:"C925 Series",productImage:"C925de.png",productDescription:"4.3-inch color touch screen allows you to operate your printer with ease and confidence through smart and intuitive navigation, easy access to workflow solutions and shortcuts",productSpecs:"Specs-C925-Series.pdf",productBrochure:"http://media.lexmark.com/www/doc/en_US/Lexmark-C925.pdf"};
    items[120] = {productName:"C950de",productImage:"C950de.jpg",productDescription:"High-performance A3 color functionality, flexible features, easy-to-use workflow solutions and advanced security",productSpecs:"Specs-C950-Series.pdf",productBrochure:"http://media.lexmark.com/www/doc/en_US/Lexmark-C950.pdf"};
    items[121] = {productName:"CS510 Series",productImage:"C740-CS510-Series.png",productDescription:"Time-saving applications, solutions, and shortcuts",productSpecs:"Specs-CS510-Series.pdf",productBrochure:"http://media.lexmark.com/www/doc/en_US/Lexmark-CS510.pdf"};
    items[122] = {productName:"C740 Series",productImage:"C740-CS510-Series.png",productDescription:"Time-saving applications, solutions, and shortcuts",productSpecs:"Specs-C740-Series.pdf",productBrochure:"http://media.lexmark.com/www/doc/en_US/Lexmark-C748.pdf"};
    items[123] = {productName:"C790 Series",productImage:"C790-Series.png",productDescription:"Color Touch Screen with Solutions, Advanced Media Handling and Brilliant Color Documents",productSpecs:"Specs-C790-Series.pdf",productBrochure:"http://media.lexmark.com/www/doc/en_US/Lexmark-C792.pdf"};
    items[124] = {productName:"CS410 Series",productImage:"CS310-CS410-Series.png",productDescription:"Run larger jobs: input capacity up to 1,450 sheets & HY cartridges",productSpecs:"Specs-CS410-Series.pdf",productBrochure:"http://media.lexmark.com/www/doc/en_US/Lexmark-CS410.pdf"};
    items[125] = {productName:"CS310 Series",productImage:"CS310-CS410-Series.png",productDescription:"Energy-saving features, including instant-warm up fuser & Hibernate mode",productSpecs:"Specs-CS310-Series.pdf",productBrochure:"http://media.lexmark.com/www/doc/en_US/Lexmark-CS310.pdf"};
    items[126] = {productName:"CX310 Series",productImage:"CX310-CX410-Series.png",productDescription:"Professional color matching (PANTONE, Named Color Replacement)",productSpecs:"Specs-CX310-Series.pdf",productBrochure:"http://media.lexmark.com/www/doc/en_US/Lexmark-CX310.pdf"};
    items[127] = {productName:"X792",productImage:"X790-Series.png",productDescription:"Advanced finishing options including stapling and hole punch",productSpecs:"Specs-X790-Series.pdf",productBrochure:"http://media.lexmark.com/www/doc/en_US/Lexmark-X792.pdf"};
    items[128] = {productName:"CX410 Series",productImage:"CX310-CX410-Series.png",productDescription:"Time-saving applications, solutions, and shortcuts",productSpecs:"Specs-CX410-Series.pdf",productBrochure:"http://media.lexmark.com/www/doc/en_US/Lexmark-CX410.pdf"};
    items[129] = {productName:"X740 Series",productImage:"CX510-X740-Series.png",productDescription:"Color Touch Screen with Solutions, Advanced Media Handling and Brilliant Color Documents",productSpecs:"Specs-X740-Series.pdf",productBrochure:"http://www.lexmark.com/en_US/products/brochures/x740-brochure.pdf"};
    items[130] = {productName:"CX510 Series",productImage:"CX510-X740-Series.png",productDescription:"Hard disk model for increased data capacity",productSpecs:"Specs-CX510-Series.pdf",productBrochure:"http://media.lexmark.com/www/doc/en_US/Lexmark-CX510.pdf"};
    items[131] = {productName:"MS710 Series",productImage:"MS710-Series.png",productDescription:"Choose the MS710dn for a lower acquisition cost.",productSpecs:"Specs-MS710-Series.pdf",productBrochure:"http://media.lexmark.com/www/doc/en_US/Lexmark-MS710.pdf"};
    items[132] = {productName:"MS711",productImage:"MS710-Series.png",productDescription:"Choose the MS711dn for additional speed and lower CPP.",productSpecs:"Specs-MS710-Series.pdf",productBrochure:"http://media.lexmark.com/www/doc/en_US/Lexmark-MS710.pdf"};
    items[133] = {productName:"MS810",productImage:"MS810-Series.png",productDescription:"Print speeds up to 70 ppm and extra high yield cartridges make this the ideal device for large workgroups and high volume applications.",productSpecs:"Specs-MS810-Series.pdf",productBrochure:"http://media.lexmark.com/www/doc/en_US/Lexmark-MS810.pdf"};
    items[134] = {productName:"MS811",productImage:"MS810-Series.png",productDescription:"Choose a 63 ppm MS811 or 70 ppm MS812 configuration for more speed and lower CPP (45K cartridge).",productSpecs:"Specs-MS811-MS812-Series.pdf",productBrochure:"http://media.lexmark.com/www/doc/en_US/Lexmark-MS811-MS812.pdf"};
    items[135] = {productName:"MS812",productImage:"MS810-Series.png",productDescription:"Print speeds up to 70 ppm and extra high yield cartridges make this the ideal device for large workgroups and high volume applications.",productSpecs:"Specs-MS811-MS812-Series.pdf",productBrochure:"http://media.lexmark.com/www/doc/en_US/Lexmark-MS811-MS812.pdf"};
    items[136] = {productName:"MX6500e + MS71x",productImage:"MX6500e.jpg",productDescription:"The MX6500e accepts a wide variety of media, from rigid identification cards to thin carbonless paper, up to and including tabloid (11x17 inches or A3) size.",productSpecs:"Specs-MX6500e.pdf",productBrochure:"http://media.lexmark.com/www/doc/en_US/Lexmark-MX6500e-MFP-Option-MS71xdn-MS810-811n-dn-MS812dn.pdf"};
    items[137] = {productName:"MX310 Series",productImage:"MX310-MX410-MX510-Series.png",productDescription:"35 ppm and 6.5s time-to-first-copy: high productivity for small workgroups",productSpecs:"Specs-MX310-Series.pdf",productBrochure:"http://media.lexmark.com/www/doc/en_US/Lexmark-MX310.pdf"};
    items[138] = {productName:"MX410 Series",productImage:"MX310-MX410-MX510-Series.png",productDescription:"Print and Copy as fast as 40 ppm; Fast ADF scans simplex or duplex originals automatically",productSpecs:"Specs-MX410-Series.pdf",productBrochure:"http://media.lexmark.com/www/doc/en_US/Lexmark-MX410.pdf"};
    items[139] = {productName:"MX511",productImage:"MX310-MX410-MX510-Series.png",productDescription:"Business is growing? This 45 ppm Smart MFP supports up to 2000-sheet input capacity, plus 20k-page cartridges",productSpecs:"Specs-MX510-MX511-Series.pdf",productBrochure:"http://media.lexmark.com/www/doc/en_US/Lexmark-MX510-MX511.pdf"};
    items[140] = {productName:"MX611",productImage:"MX710-MX610-Series.png",productDescription:"A device busy medium workgroups can trust: up to 50 ppm print and copy, plus a fast, robust ADF",productSpecs:"Specs-MX610-Series.pdf",productBrochure:"http://media.lexmark.com/www/doc/en_US/Lexmark-M611-Series_Product-Spec-Sheet-final.pdf"};
    items[141] = {productName:"MX810 Series",productImage:"MX810-Series.png",productDescription:"70 ppm, extra high yield cartridges, and RMPV as high as 35K pages make this the ideal device for large workgroups and high volume applications.",productSpecs:"Specs-MX810-Series.pdf",productBrochure:"http://media.lexmark.com/www/doc/en_US/Lexmark-MX810-MX811-MX812.pdf"};
    items[142] = {productName:"MS810 Series + MX6500e",productImage:"MS810-Series.png",productDescription:"Multifunction option provides you with the flexibility needed to create a powerful MFP system that meets your capturing, printing and finishing needs.",productSpecs:"Specs-MX6500e.pdf",productBrochure:"http://media.lexmark.com/www/doc/en_US/Lexmark-MX6500e-MFP-Option-MS71xdn-MS810-811n-dn-MS812dn.pdf"};
    items[143] = {productName:"MX510 Series",productImage:"MX310-MX410-MX510-Series.png",productDescription:"Run any Lexmark eSF solution with a fast dual-core processor, 512MB memory, and an optional hard disk drive",productSpecs:"Specs-MX510-MX511-Series.pdf",productBrochure:"http://media.lexmark.com/www/doc/en_US/Lexmark-MX510-MX511.pdf"};
    items[144] = {productName:"MX610",productImage:"MX710-MX610-Series.png",productDescription:"The 7-inch touch screen provides the best user experience for running productivity solutions",productSpecs:"Specs-MX610-Series.pdf",productBrochure:"http://media.lexmark.com/www/doc/en_US/Lexmark-MX610-MX611.pdf"};
    items[145] = {productName:"MS310 Series",productImage:"MS310-MS410-Series.png",productDescription:"Print complex documents up to 35 ppm, plus get your first print as fast as 6.5s, thanks to a powerful dual-core processor",productSpecs:"Specs-MS310-MS410-Series.pdf",productBrochure:"http://media.lexmark.com/www/doc/en_US/Lexmark-MS310.pdf"};
    items[146] = {productName:"MS410 Series",productImage:"MS310-MS410-Series.png",productDescription:"A 2-line display allows an easy-to-use experience, even in reduced-space environments like retail or small offices",productSpecs:"Specs-MS310-MS410-Series.pdf",productBrochure:"http://media.lexmark.com/www/doc/en_CA/Lexmark-MS410d-MS410dn.pdf"};
    items[147] = {productName:"MS510 Series",productImage:"MS310-MS410-Series.png",productDescription:"Be more effective with an easy-to-use Color LCD display and number pad, which also support secure printing",productSpecs:"Specs-MS510-Series.pdf",productBrochure:"http://media.lexmark.com/www/doc/en_US/Lexmark-MS510.pdf"};
    items[148] = {productName:"MS610 Series",productImage:"MS510-MS610-Series.png",productDescription:"Minimize downtime with 20k-page cartridges and 3 additional trays for up to 2300-sheet total input capacity",productSpecs:"Specs-MS610-Series.pdf",productBrochure:"http://media.lexmark.com/www/doc/en_US/Lexmark-MS610.pdf"};
    items[149] = {productName:"MS810 Series",productImage:"MS810-Series.png",productDescription:"Choose a 55 ppm MS810 configuration for a lower acquisition cost.",productSpecs:"Specs-MS810-Series.pdf",productBrochure:"http://media.lexmark.com/www/doc/en_US/Lexmark-MS810.pdf"};
    items[150] = {productName:"MS811",productImage:"MS810-Series.png",productDescription:"Print speeds up to 70 ppm and extra high yield cartridges make this the ideal device for large workgroups and high volume applications.",productSpecs:"Specs-MS811-MS812-Series.pdf",productBrochure:"http://media.lexmark.com/www/doc/en_US/Lexmark-MS811-MS812.pdf"};
    items[151] = {productName:"MS812",productImage:"MS810-Series.png",productDescription:"Choose a 63 ppm MS811 or 70 ppm MS812 configuration for more speed and lower CPP (45K cartridge).",productSpecs:"Specs-MS811-MS812-Series.pdf",productBrochure:"http://media.lexmark.com/www/doc/en_US/Lexmark-MS811-MS812.pdf"};
    items[152] = {productName:"X790 Series",productImage:"X790-Series.png",productDescription:"Enterprise-level security, including audit logging, encrypted print path, and hard disk wiping",productSpecs:"Specs-X790-Series.pdf",productBrochure:"http://media.lexmark.com/www/doc/en_US/Lexmark-X792.pdf"};
    items[153] = {productName:"MX710",productImage:"MX710-MX610-Series.png",productDescription:"Print speeds up to 70 ppm and extra high yield cartridges make this the ideal device for large workgroups and high volume applications.",productSpecs:"Specs-MX710-Series.pdf",productBrochure:"http://media.lexmark.com/www/doc/en_US/Lexmark-MX710-MX711.pdf"};
    /* END 20140429 Ace */
}

function getItems()
{
    return items;
}

//functions to encapsulate HTML5 local storage
function initAnswerStorage()
{
    removeAllAnswers();
    //window.localStorage.setItem( "count", 0);
}

function addAnswer(itemIndex, answerIndex)
{
    //get the total count from HTML5 local storage
    var countTxt = window.localStorage.getItem("count");
    var count   = parseInt(countTxt,10);    //convert to integer
    
    //alert("current count:"+count);
    
    var key = ""+count; //convert to text
    //var key   = countTxt;
    var value = itemIndex+"-"+answerIndex;
    
    
    //save to HTML5 local storage
    window.localStorage.setItem( key, value);
    
    //update the new count and save to HTML5 local storage
    var newCount = count + 1;
    window.localStorage.setItem( "count", newCount);
    
    //alert("count:"+newCount+" Key="+key+" value="+value);
}

function getAnswerAt(index)
{
    var key = ""+index; //convert to integer
    
    //get the value from HTML5 local storage
    return window.localStorage.getItem(key);
}

function setAnswerAt(index,itemIndex, answerIndex)
{
    var key = ""+index; //convert to integer
    
    var value = itemIndex+"-"+answerIndex;
    //save to HTML5 local storage
    window.localStorage.setItem( key, value);
}

function getAnswersCount()
{
    //get the value from HTML5 local storage
    var count   = window.localStorage.getItem("count");
    return parseInt(count,10)
}

function removeAllAnswersFrom(index)
{
    var count = getAnswersCount();
    
    for(var i=index+1; i<count; i++)
    {
        var key = ""+i; //convert to integer
        window.localStorage.removeItem(key);
    }
    
    //update the new count and save to HTML5 local storage
    var newCount = index;
    window.localStorage.setItem( "count", newCount);
    
}

function removeAllAnswers()
{
    var count = getAnswersCount();
    
    for(var i=0; i<count; i++)
    {
        var key = ""+i; //convert to integer
        window.localStorage.removeItem(key);
    }
    
    //update the new count and save to HTML5 local storage
    window.localStorage.setItem( "count", 0);
    
}
function removeLastAnswer()
{
    var count = getAnswersCount();
    var newCount = count - 1;
    
    var key = ""+newCount; //convert to integer
    window.localStorage.removeItem(key);
    
    //update the new count and save to HTML5 local storage
    window.localStorage.setItem( "count", newCount);
}
function removeItemAnswer(itemIndex)
{
    //alert("itemIndex:"+itemIndex);
    var count = getAnswersCount();
    //alert("first count:" + count);
    
    for(i=0; i<count; i++)
    {
        var key = ""+i; //convert to integer
        var value = window.localStorage.getItem(key);
        
        var txt = value.split("-"); // Split on dash
        
        var index   = parseInt(txt[0],10);  //convert to integer
        //var choiceIndex = parseInt(txt[1],10);  //convert to integer
        if(index == itemIndex)
        {
            //alert("found itemIndex:"+itemIndex);
            
            window.localStorage.removeItem(key);
            
            var newCount = count - 1;
            var key = ""+newCount; //convert to integer
            //update the new count and save to HTML5 local storage
            window.localStorage.setItem( "count", newCount);
            
            break;
        }
    }
    
    //count = getAnswersCount();
    //alert("second count:"+count);
}

function setCurrentIndex(index)
{
    window.localStorage.setItem( "currentIndex", index);
}

function getCurrentIndex()
{
    var value = window.localStorage.getItem("currentIndex");
    var index   = parseInt(value,10);  //convert to integer
    return index;
}

createItems();
