var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var request = require("request");
var querystring = require("querystring");
var firebase = require("firebase-admin");
var schedule = require("node-schedule");

setInterval(function() {
  http.get("http://stockmonitorserver.herokuapp.com/");
}, 1740 * 1000);

var certif = {
  type: "service_account",
  project_id: "stock-30003",
  private_key_id: "951bb1dd31f5f6f44d1d5b5c4527a75fca0f302c",
  private_key:
    "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC9zMl4yzawe2De\n0WeaaQaQMfJktwI+AzxEemVxb7NKUOYuZwYYQQhYF08R5/F9+DekVbk9sW4CKI7U\nwEXDNcow4ozZmI3fq46KqBFL6k5y8qX486gBLUP+8sw3RqI0kpwBw5RJ/zQGOBOh\ntKJz8VEUFnyIqe7wwjqfbQw6Cm5SNQeQiaq76RqzMvfNz7erEDVL4ejCnSRHy/v5\nZsF7KYzt9QDdkQeEFlDXCplSfsO3yx+yal+anog3s9NjE71Zulbt4iBoz16XHzlK\ndX/0SspxEcLcJbs6YHdoo0HZQHSWheHtNW5/Uv0IEJZQpnVe8moHTfSZpGuH5S9C\n9eXaVVRPAgMBAAECggEAFDx+6KmmCZgGAovKI4z6HaqtoO5gR1NZ/CUepsMVlyFc\nAWuLm09nv9iwXgTgWyF5cUSQjRLbW1COtgFQDtmv1pl5EgQxcD0e5Aq6WWFAfwH/\nDzWPXpzAaLDjdCtMRRWym3+KUn9qwRT+htm3DmyWy/D/0yRnLPVQgcoDKTcOfyYo\nNyHIIzuGnZwhh3OV2cYrnzcCuKdnBNT1xWmcjVp9Ia8CG7XEPIQBvRWrdgZSXPkQ\nG9qxnwIGIpoAVBzKQn+kUFGTaoncXAgYOyekPUNRQ99eusUanxepFOFec/m3rmsV\nryKUMbdyNSKKoeV4eWrQzeTj/l32lM5+ASlsJ2rToQKBgQDopiyu3QodUO+G8UGl\nJn/tXj/P6qSoh/XUBWHZIi37YpoIKVoixm4smgyMQpgVFxoawmP+FBeIT7DXx+8Y\nvVGg1I2XYLX5WrhaRq1XrSE85NtlWMivleCPk0UYCGEWfniydX43yPnPYeVGBfZ6\nFY5keyA17FL6ftMdKqfSrkG1oQKBgQDQ2Z7KxtTPb66LKe2EwbWw5aQ5bRP9yIUv\nUmZmSb2BmdvB9eP8fVBG7hR4mjtDLeky6307V66LO0zv12gKit0Tq8DhUn+dsoCe\nAwkU6z0GPahy3gcGsHzlHu+6R9ze2WSK0EaPyLLCGUE2clyCXvDdKoQaHPhz2Lm/\nA+ajMo/j7wKBgQCpnR1Oj1BkdzFqTFHzudHimKglSYiqZhVPcm0YBNdJQ2XRNXTF\nja2dTuJ/D74ZAjLB9583Cibt9kuTxewHOV9dxhlEl/mTxhRJnOWb2lk1MBTUGpqV\niMujYVcqYlGGOMZ+NTLEMP4Pt+uT1Z0Q/M5Ha4zcQ2NrxTLdPNAFxY2agQKBgQCq\nrd62yy2p5RSZCIfi4cgRrGq8v6cB1Tj7BnVHDOaBnvLYnZJXizXq8bDrKuhZq5CU\nG525vJuZj7n9nGWbkAbCh6/WtOw0PWgdOk/Wt7SkgAlE7qyBTASV3uV9sDMSMEmZ\npEK2SQfF1ovT6jwuE1b2+EMDcD+ftTN/prl7D9xGIwKBgFBVQXx+VZU3LKpKgM4i\ni7qyP8JYDR9mE6Z+txT7fJYUW6ugkj69zWgM+8o8A0PRtPJp/LmDgTovWSMUW4/N\nWpGLDZ6i8fXdIndNvaaMiGZbhOXEQOSKNmGRHXwsYgvFd+InpBwRg+uwP5vT4F7m\nieA44ZZE1NQvDqtE4tXZXXVC\n-----END PRIVATE KEY-----\n",
  client_email: "firebase-adminsdk-cih0l@stock-30003.iam.gserviceaccount.com",
  client_id: "105648057964115946653",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://accounts.google.com/o/oauth2/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-cih0l%40stock-30003.iam.gserviceaccount.com"
};

firebase.initializeApp({
  credential: firebase.credential.cert(certif),
  databaseURL: "https://stock-30003.firebaseio.com"
});

var symbolArr = [
  "3MINDIA,8KMILES,ABB,ACC,AIAENG,APLAPOLLO,AARTIIND,ABAN,ADANIENT,ADANIPORTS,ADANIPOWER,ADANITRANS,ABFRL,ADVENZYMES,AEGISCHEM,AHLUCONT,AJANTPHARM,AKZOINDIA,APLLTD,ALKEM,ALBK,ALLCARGO,AMARAJABAT,AMBUJACEM,AMTEKAUTO,ANANTRAJ,ANDHRABANK,APARINDS,APOLLOHOSP,APOLLOTYRE,ARVIND,ASAHIINDIA,ASHOKLEY,ASHOKA,ASIANPAINT,ASTRAZEN,ASTRAL,ATUL,AUROPHARMA,AVANTIFEED,AXISBANK,BASF,BEML,BFUTILITIE,BGRENERGY,BAJAJ-AUTO,BAJAJCORP,BAJAJELEC,BAJFINANCE,BAJAJFINSV,BAJAJHIND,BAJAJHLDNG,BALKRISIND,BALLARPUR,BALMLAWRIE,BALRAMCHIN,BANKBARODA,BANKINDIA,BATAINDIA,BERGEPAINT,BEL,BHARATFIN,BHARATFORG,BHEL,BPCL,BHARTIARTL,INFRATEL,BHUSANSTL,BIOCON,BIRLACORPN,BLISSGVS,BLUEDART,BLUESTARCO,BBTC,BOMDYEING,BOSCHLTD,BRITANNIA,CARERATING,CCL,CESC,CGPOWER,CRISIL,CADILAHC,CANFINHOME,CANBK,CAPF,CAPLIPOINT,CARBORUNIV,CASTROLIND,CEATLTD,CENTRALBK,CENTURYPLY,CENTURYTEX,CERA,CHAMBLFERT,CHENNPETRO,CHOLAFIN,CIPLA,CUB,COALINDIA",
  "COFFEEDAY,COLPAL,CONCOR,COROMANDEL,CORPBANK,COX%26KINGS,CROMPTON,CUMMINSIND,CYIENT,DBREALTY,DBCORP,DCBBANK,DCMSHRIRAM,DLF,DABUR,DALMIABHA,DEEPAKFERT,DELTACORP,DEN,DENABANK,DHFL,DHANUKA,DBL,DISHTV,DIVISLAB,LALPATHLAB,DRREDDY,DREDGECORP,EIDPARRY,EIHOTEL,EDELWEISS,EICHERMOT,EMAMILTD,ENDURANCE,ENGINERSIN,EQUITAS,EROSMEDIA,ESCORTS,ESSELPACK,EVEREADY,EXIDEIND,FDC,FAGBEARING,FEDERALBNK,FMGOETZE,FINCABLES,FINPIPE,FSL,FORTIS,FCONSUMER,FRETAIL,GAIL,GEPIL,GET%26D,GHCL,GMRINFRA,GVKPIL,GDL,GATI,GAYAPROJ,GILLETTE,GSKCONS,GLAXO,GLENMARK,GODFRYPHLP,GODREJCP,GODREJIND,GODREJPROP,GRANULES,GESHIP,GREAVESCOT,GREENPLY,GRINDWELL,GRUH,GUJALKALI,GUJFLUORO,GUJGASLTD,GMDCLTD,GNFC,GPPL,GSFC,GSPL,GULFOILLUB,HCL-INSYS,HCLTECH,HDFCBANK,HSIL,HTMEDIA,HATHWAY,HAVELLS,HEIDELBERG,HEROMOTOCO,HEXAWARE,HFCL,HIMATSEIDE,HINDALCO,HCC,HINDCOPPER,HMVL,HINDPETRO",
  "HINDUNILVR,HINDZINC,HONAUT,HDFC,HDIL,ITC,ICICIBANK,ICICIPRULI,ICRA,IDBI,IDFCBANK,IDFC,IFCI,IIFL,IL%26FSTRANS,IRB,ITDCEM,IDEA,IGARASHI,INDIACEM,IBULHSGFIN,IBREALEST,INDIANB,INDHOTEL,IOC,IOB,ICIL,INDOCO,IGL,INDUSINDBK,INFIBEAM,NAUKRI,INFY,INOXLEISUR,INOXWIND,INTELLECT,INDIGO,IPCALAB,JBCHEPHARM,JKCEMENT,JKIL,JBFIND,JKLAKSHMI,JKTYRE,JMFINANCIL,JMTAUTOLTD,JSWENERGY,JSWSTEEL,JAGRAN,JAICORPLTD,JISLJALEQS,JPASSOCIAT,J%26KBANK,JETAIRWAYS,JINDALPOLY,JINDALSTEL,JCHAC,JUBLFOOD,JUBILANT,JUSTDIAL,JYOTHYLAB,KPRMILL,KNRCON,KPIT,KRBL,KAJARIACER,KALPATPOWR,KANSAINER,KTKBANK,KARURVYSYA,KSCL,KEC,KESORAMIND,KITEX,KOLTEPATIL,KOTAKBANK,KWALITY,L%26TFH,LTTS,LICHSGFIN,LAXMIMACH,LAKSHVILAS,LTI,LT,LAURUSLABS,LUPIN,MMTC,MOIL,MRF,MAGMA,MGL,MTNL,M%26MFIN,M%26M,MAHINDCIE,MHRIL,MANAPPURAM,MRPL,MANPASAND,MARICO",
  "MARKSANS,MARUTI,MAXINDIA,MCLEODRUSS,MERCK,MINDTREE,MINDACORP,MINDAIND,MONSANTO,MOTHERSUMI,MOTILALOFS,MPHASIS,MUTHOOTFIN,NATCOPHARM,NBCC,NCC,NHPC,NIITTECH,NLCINDIA,NMDC,NTPC,NH,NATIONALUM,NBVENTURES,NAVINFLUOR,NAVKARCORP,NAVNETEDUL,NETWORK18,NILKAMAL,NITINFIRE,OBEROIRLTY,ONGC,OIL,OMAXE,OFSS,ORIENTCEM,ORIENTBANK,ORISSAMINE,PCJEWELLER,PIIND,PNBHOUSING,PNCINFRA,PFS,PTC,PVR,PAGEIND,PARAGMILK,PERSISTENT,PETRONET,PFIZER,PHOENIXLTD,PIDILITIND,PEL,POLARIS,PFC,POWERGRID,PRAJIND,PRESTIGE,PRISMCEM,PGHH,PUNJLLOYD,PNB,QUESS,RBLBANK,RADICO,RAIN,RAJESHEXPO,RALLIS,RAMCOSYS,RKFORGE,RCF,RATNAMANI,RTNPOWER,RAYMOND,REDINGTON,RELAXO,RELCAPITAL,RCOM,RDEL,RIIL,RELIANCE,RELINFRA,RPOWER,RELIGARE,REPCOHOME,ROLTA,RUCHISOYA,RECLTD,SHK,SJVN,SKFINDIA,SMLISUZU,SREINFRA,SRF,SADBHAV,SANOFI,SCHNEIDER,SHARDACROP,SHILPAMED,SHILPI",
  "SCI,SHREECEM,RENUKA,SHRIRAMCIT,SRTRANSFIN,SIEMENS,SNOWMAN,SOBHA,SOLARINDS,SOMANYCERA,SONATSOFTW,SOUTHBANK,SBIN,STCINDIA,SAIL,STRTECH,STAR,SUDARSCHEM,SPARC,SUNPHARMA,SUNTV,SUNDARMFIN,SUNDRMFAST,SUNTECK,SUPREMEIND,SUVEN,SUZLON,SWANENERGY,SYMPHONY,SYNDIBANK,SYNGENE,TTKPRESTIG,TVTODAY,TV18BRDCST,TVSMOTOR,TVSSRICHAK,TAKE,TNPL,TATACHEM,TATACOFFEE,TATACOMM,TCS,TATAELXSI,TATAGLOBAL,TATAINVEST,TATAMTRDVR,TATAMOTORS,TATAPOWER,TATASPONGE,TATASTEEL,TECHM,TECHNO,TEXRAIL,RAMCOCEM,THERMAX,THOMASCOOK,THYROCARE,TIDEWATER,TIMKEN,TITAN,TORNTPHARM,TORNTPOWER,TRENT,TRIDENT,TRITURBINE,UCOBANK,UFLEX,UPL,UJJIVAN,ULTRACEMCO,UNICHEMLAB,UNIONBANK,UNITECH,UBL,MCDOWELL-N,VGUARD,VIPIND,VRLLOG,VSTIND,WABAG,VAKRANGEE,VTL,VBL,VEDL,VIDEOIND,VIJAYABANK,VINATIORGA,VOLTAS,WABCOINDIA,WELCORP,WELSPUNIND,WHIRLPOOL,WIPRO,WOCKPHARMA,WONDERLA,YESBANK,ZEEL,ZEELEARN,ZENSARTECH,ZYDUSWELL"
];

Array.prototype.contains = value => {
  if (value == null || value === undefined) {
    return false;
  }
  for (var i = 0; i < this.length; i++) {
    if (value === this[i]) return true;
  }
  return false;
};

app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true
  })
);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

var j = schedule.scheduleJob({ hour: 12, minute: 25 }, function() {
 FetchAndStoreData();
});

app.get("/", function(req, res) {
  res.send(this.address());
});

app.get("/FetchData", function(req, res) {
 FetchAndStoreData();
});

app.get("/Status", function(req, res) {
  var dataRef = firebase.database().ref("/data");
  dataRef.once("value", function(snapshot) {
    var value = snapshot.val();
    var bodyArr = JSON.parse(value);
    res.send({ size: bodyArr.length, data: bodyArr });
  });
});

app.post("/GetData", function(req, res) {
  console.log("Posted GetData");
  var key = req.body.key;
});

app.listen(process.env.PORT || 3000, function() {
  console.log(
    "Express server listening on port %d in %s mode",
    this.address().port,
    app.settings.env
  );
});

function FetchAndStoreData() {
  var bodyArr = [];

  var dataRef = firebase.database().ref("/data");
  dataRef.once("value", function(snapshot) {
    var value = snapshot.val();
    var bodyArr = JSON.parse(value);
    FetchAndStoreDataPrivate(0, bodyArr);
  });
}

function FetchAndStoreDataPrivate(i, bodyArr) {
  console.log("Symbol Arr length: " + symbolArr.length + " i: " + i);
  if (i == symbolArr.length) {
    var dataRef = firebase.database().ref("/data");
    dataRef.set(JSON.stringify(bodyArr));
  } else {
    var URL = "http://finance.google.com/finance/info?q=NSE%3A" + symbolArr[i];
    request(URL, function(error, response, body) {
      body = body.replace("//", "");
      bodyArr = bodyArr.concat(JSON.parse(body));
      FetchAndStoreDataPrivate(++i, bodyArr);
    });
  }
}
