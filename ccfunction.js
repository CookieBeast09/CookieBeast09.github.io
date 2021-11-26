var isMobile = /iPhone|iPad|iPod|Android|Windows/i.test(navigator.userAgent);
var cookiecount = 0;
var clickrate =  1
var cps =  ((((((((((((((((cursor) + grandma * 7) + farm * 80) + mine * 620) + factory * 8667) + bank * 93334) + temple * 1333334) + wizardTower * 22000000) + shipment * 340000000) + alchemyLab * 5*10**9) + portal * 66666666667) + timeMachine * 933333333334) ))))
var multiplier = 1
var m = Math.random(15, 450)
var cookieimg = document.getElementById('cookieimg')
var cursor = 0
var grandma = 0
var farm = 0
var mine = 0
var factory = 0
var bank = 0
var temple = 0
var wizardTower = 0
var shipment = 0
var alchemyLab = 0
var portal = 0
var timeMachine = 0
var antimatterCondenser = 0
var prism = 0
var chancemaker = 0
var fractalEngine = 0
var javascriptConsole = 0
var idleverse = 0
//-------- CPS
var cursorcps = 1
var grandmacps = 7
var farmcps = 80
var minecps = 620
var factorycps = 8667
var bankcps = 93334
var templecps = 1333334
var wizardtowercps = 22000000
var shipmentcps = 340000000

function add()
        {
            cookiecount = cookiecount + clickrate
            update();
            
        }
        function interimg(params)
        {
            document.getElementById('cookieimg').width = "300px";
            
        }
        function save(params)
        {
            localStorage.setItem("cookiecount", cookiecount);
            localStorage.setItem("cursor", cursor)
            localStorage.setItem("grandma", grandma)
            localStorage.setItem("farm", farm)
            localStorage.setItem("mine", mine)
            localStorage.setItem("factory", factory)
            localStorage.setItem("bank", bank)
            localStorage.setItem("temple", temple)
            localStorage.setItem("wizardtower", wizardTower)
            localStorage.setItem("shipment", shipment)
            localStorage.setItem("alchemylab", alchemyLab)
            localStorage.setItem("portal", portal)
        }
        function load(params)
        {
            cookiecount = localStorage.getItem("cookiecount");
            cookiecount = parseInt(cookiecount);
            cursor = localStorage.getItem('cursor')
            cursor = parseInt(cursor)
            grandma = localStorage.getItem('grandma')
            grandma = parseInt(grandma)
            farm = localStorage.getItem('farm')
            farm = parseInt(farm)
            mine = localStorage.getItem('mine')
            mine = parseInt(mine)
            factory = localStorage.getItem('factory')
            factory = parseInt(factory)
            bank = localStorage.getItem("bank")
            bank = parseInt(bank)
            temple = localStorage.getItem("temple")
            temple = parseInt(temple)
            wizardTower = localStorage.getItem('wizardtower')
            wizardTower = parseInt(wizardTower)
            shipment = localStorage.getItem('shipment')
            shipment = parseInt(shipment)
            alchemyLab = localStorage.getItem('alchemylab')
            alchemyLab = parseInt(alchemyLab)
            portal = localStorage.getItem("portal")
            portal = parseInt(portal)

            update();
            
        }
        function timer(params)
        {
            cookiecount = cookiecount + cursor 
            cookiecount = cookiecount + grandma * 5
            cookiecount = cookiecount + farm * 10
            cookiecount = cookiecount + mine * 47
            cookiecount = cookiecount + factory * 260
            cookiecount = cookiecount + bank * 1400
            cookiecount = cookiecount + temple * 7800
            cookiecount = cookiecount + wizardTower * 44000
            cookiecount = cookiecount + shipment * 260000
            cookiecount = cookiecount + alchemyLab * 1600000
            cookiecount = cookiecount + portal * 10000000
            cookiecount = cookiecount + timeMachine * 65*10**9
        }
        function addcc(params)
        {
            if ((cursor) + (grandma * 5) + (farm * 10) + (mine * 47) + (factory * 260) + (bank * 1400) + (temple * 7800) + (wizardTower * 44000) + (shipment * 260000) + (alchemyLab * 1600000) >= 1) 
            {
                cookiecount = cookiecount + (10 / ((cursor) + (grandma * 5) + (farm * 10) + (mine * 47) + (factory * 260) + (bank * 1400) + (temple * 7800) + (wizardTower * 44000) + (shipment * 260000) + (alchemyLab * 1600000)))        
                document.getElementById('millbill').innerHTML = cookiecount      
            }
            
        }
        setInterval(addcc(),10)
        setInterval(timer, 1000)
        setInterval(update, 250)
        function update(params)
        {
            document.getElementById('cookieimg').style.width = "13pc"
            document.getElementById('cookieimg').style.height = "13pc"
            document.getElementById('millbill').innerHTML = cookiecount
            document.title = cookiecount + " cookies"
            document.getElementById('cps').innerHTML = "per second: " + (((((((((((cursor) + grandma * 5) + farm * 10) + mine * 47) + factory * 260) + bank * 1400) + temple * 7800) + wizardTower * 44000) + shipment * 260000) + alchemyLab * 1600000) + portal * 10000000)
            window.onunload = function (){
                save()
            }
            /*if (window.open == true)          
            {
                load()
                
            }
            */
            
        
        /*  if (parseInt(localStorage.getItem("cookiecount")) <= cookiecount)
          {
              localStorage.setItem("cookiecount", cookiecount)

          }
        if (parseInt(localstorage.getItem("cursor")) < cursor)
          {
              localStorage.setItem("cursor", cursor)
              
          }
          if (parseInt(localstorage.getItem("grandma")) < grandma)
          {
              localstorage.setItem("grandma", grandma)
              
          }
          if (parseInt(localstorage.getItem("farm")) < farm)
          {
              localstorage.setItem("farm", farm)
              
          }
          if (parseInt(localstorage.getItem("mine")) < mine)
          {
              localstorage.setItem("mine", mine)

              
          }
          if (parseInt(localstorage.getItem("factory")) < factory)
          {
              localstorage.setItem("factory", factory)
            
          }
          if (parseInt(localstorage.getItem("bank")) < bank)
          {
              localstorage.setItem("bank", bank)
              
          }
          if (parseInt(localstorage.getItem("temple")) < temple)
          {
              localstorage.setItem("temple", temple)
              
          }
          if (parseInt(localstorage.getItem("wizardtower")) < wizardTower)
          {
              localstorage.setItem("wizardtower", wizardTower)
              
          }
          if (parseInt(localstorage.getItem("shipment")) < shipment)
          {
              localstorage.setItem("shipment", shipment)
              
          }
          if (parseInt(localstorage.getItem("alchemylab")) < alchemyLab)
          {
              localstoragea.setItem("alchemylab", alchemyLab)
              
          }
          */
          
     


          if (cookiecount >= 1000000000000000)
          {
              document.getElementById('millbill').innerHTML = (Math.floor(1000 * (cookiecount / 1000000000000000)) / 1000).toFixed(3) + " quadrillion"
              document.title = (Math.floor(1000 * (cookiecount / 1000000000000000)) / 1000).toFixed(3) + " quadrillion"
          }
          else if (cookiecount >= 1000000000000)
          {
              document.getElementById('millbill').innerHTML = (Math.floor(1000 * (cookiecount / 1000000000000)) / 1000).toFixed(3) + " trillion"
              document.title = (Math.floor(1000 * (cookiecount / 1000000000000)) / 1000).toFixed(3) + " trillion"
          }
          else if (cookiecount >= 1000000000)
          {
              document.getElementById('millbill').innerHTML = (Math.floor(1000 * (cookiecount / 1000000000)) / 1000).toFixed(3) + " billion"
              document.title =  (Math.floor(1000 * (cookiecount / 1000000000)) / 1000).toFixed(3) + " billion"
          }
          else if (cookiecount >= 1000000)
          {
              document.getElementById('millbill').innerHTML = (Math.floor(1000 * (cookiecount / 1000000)) / 1000).toFixed(3) + " million"
              document.title = (Math.floor(1000 * (cookiecount / 1000000)) / 1000).toFixed(3) + " million"
          }
          else if (cookiecount < 10**6)
          {
              document.getElementById('millbill').innerHTML = cookiecount
              document.title = cookiecount + " cookies"
              
          }

          //cps simplification

          if ((cursor) + (grandma * 5) + (farm * 10) + (mine * 47) + (factory * 260) + (bank * 1400) + (temple * 7800) + (wizardTower * 44000) + (shipment * 260000) + (alchemyLab * 1600000) + (portal * 10**7)>= 1000000000000000)
          {
              document.getElementById('cps').innerHTML = "per second: " + (Math.round(1000 * (cursor) + (grandma * 5) + (farm * 10) + (mine * 47) + (factory * 260) + (bank * 1400) + (temple * 7800) + (wizardTower * 44000) + (shipment * 260000) + (alchemyLab * 1600000) + (portal * 10**7) / 1000000000000000) / 1000) + " quadrillion"
              
          }
          else if ((cursor) + (grandma * 5) + (farm * 10) + (mine * 47) + (factory * 260) + (bank * 1400) + (temple * 7800) + (wizardTower * 44000) + (shipment * 260000) + (alchemyLab * 1600000) + (portal * 10**7)>= 1000000000000)
          {
              document.getElementById('cps').innerHTML = "per second: " + (Math.round(1000 * ((cursor) + (grandma * 5) + (farm * 10) + (mine * 47) + (factory * 260) + (bank * 1400) + (temple * 7800) + (wizardTower * 44000) + (shipment * 260000) + (alchemyLab * 1600000) + (portal * 10**7) / 1000000000000)) / 1000) + " trillion"
              
          }
          else if ((cursor) + (grandma * 5) + (farm * 10) + (mine * 47) + (factory * 260) + (bank * 1400) + (temple * 7800) + (wizardTower * 44000) + (shipment * 260000) + (alchemyLab * 1600000) + (portal * 10**7) >= 1000000000 )
          {
              document.getElementById('cps').innerHTML = "per second: " + (Math.round( 1000 * ((cursor) + (grandma * 5) + (farm * 10) + (mine * 47) + (factory * 260) + (bank * 1400) + (temple * 7800) + (wizardTower * 44000) + (shipment * 260000) + (alchemyLab * 1600000) + (portal * 10**7) / 1000000000)) / 1000) + " billion"
          }
          else if ((cursor) + (grandma * 5) + (farm * 10) + (mine * 47) + (factory * 260) + (bank * 1400) + (temple * 7800) + (wizardTower * 44000) + (shipment * 260000) + (alchemyLab * 1600000) + (portal * 10**7) >= 1000000)
          {
              document.getElementById('cps').innerHTML = "per second: " + (Math.round(1000 * ((cursor) + (grandma * 5) + (farm * 10) + (mine * 47) + (factory * 260) + (bank * 1400) + (temple * 7800) + (wizardTower * 44000) + (shipment * 260000) + (alchemyLab * 1600000) + (portal * 10**7)) / 1000000) / 1000) + " million"
          }


            document.getElementById('cursorcost').innerHTML = Math.round(15 * (1.20 ** cursor)) + " cookies"
            document.getElementById('amountcursor').innerHTML = cursor + " cursors"
            document.getElementById('grandmacost').innerHTML = Math.round(100 * (1.20 ** grandma)) + " cookies"
            document.getElementById('amountgrandma').innerHTML = grandma + " grandmas"
            document.getElementById('farmcost').innerHTML = Math.round(1200 * (1.20 ** farm)) + " cookies"
            document.getElementById('amountfarm').innerHTML = farm + " farms"
            document.getElementById('minecost').innerHTML = Math.round(12000 * (1.20 ** mine)) + " cookies"
            document.getElementById('amountmine').innerHTML = mine + " mines"
            document.getElementById('factorycost').innerHTML = Math.round(130000 * (1.20 ** factory)) + " cookies"
            document.getElementById('amountfactory').innerHTML = factory + " factories"
            document.getElementById('bankcost').innerHTML = Math.round(1400000 * (1.20 ** bank)) + " cookies"
            document.getElementById('amountbank').innerHTML = bank + " banks"
            document.getElementById('templecost').innerHTML = Math.round(20000000 * (1.20 ** temple)) + " cookies"
            document.getElementById('amounttemple').innerHTML = temple + " temples"
            document.getElementById('wizardtowercost').innerHTML = Math.round(330000000 * (1.20 ** wizardTower)) + " cookies"
            document.getElementById('amountwizardtower').innerHTML = wizardTower + " wizard towers"
            document.getElementById('shipmentcost').innerHTML = Math.round(5100000000 * (1.20 ** shipment)) + " cookies"
            document.getElementById('amountshipment').innerHTML = shipment + " shipments"
            document.getElementById('alchemylabcost').innerHTML = Math.round(75000000000 * (1.20 ** alchemyLab)) + " cookies"
            document.getElementById('amountalchemylab').innerHTML = alchemyLab + " alchemy labs"
            document.getElementById('portalcost').innerHTML = Math.round(10**12 * (1.20 ** portal)) + " cookies"
            document.getElementById('amountportal').innerHTML = portal + " portal"
            document.getElementById('timemachinecost').innerHTML = Math.round(14*10**12 * (1.20 ** timeMachine)) + " cookies"
            document.getElementById('amounttimemachine').innerHTML = timeMachine + " timemachines"

        }
        
        function buymultiplier(params)
        {
            if (cookiecount >= (multliplier + 1) * 1000)
            {
                cookiecount = cookiecount - (multliplier + 1) * 1000
                multiplier = multiplier + 1
                
            }

            
        }
        function simplifycookiecount(params, strnum)
        {
            if (cookiecount >= params)
            {
                document.getElementById('millbill').innerHTML = cookiecount / params + strnum

                
            }
            
        }
        function buycursor(params)
        {
            if (cookiecount >= Math.round(15 * (1.20 ** cursor)))
            {
                cookiecount = cookiecount - Math.round(15 * (1.20 ** cursor))
                cursor = cursor + 1
                update()
            }
            
        }
        function buygrandma(params)
        {
            if (cookiecount >= Math.round(100 * (1.20 ** grandma)))
            {
                cookiecount = cookiecount - Math.round(100 * (1.20 ** grandma))
                grandma = grandma + 1
                update()
                
            }
            
        }
        function buyfarm(params)
        {
            if (cookiecount >= Math.round(1200 * (1.20 ** farm)))
            {
                cookiecount = cookiecount - Math.round(1200 * (1.20 ** farm))
                farm = farm + 1
                update()
                
            }
            
        }
        function buymine(params)
        {
            if (cookiecount >= Math.round(12000 * (1.20 ** mine)))
            {
                cookiecount = cookiecount - Math.round(12000 * (1.20 ** mine))
                mine = mine + 1
                update()

                
            }
            
        }
        function buyfactory(params)
        {
            if (cookiecount >= Math.round(130000 * (1.20 ** factory)))
            {
                cookiecount = cookiecount - Math.round(130000 * (1.20 ** factory))
                factory = factory + 1
                update()
                
            }
            
        }
        function buybank(params)
        {
            if (cookiecount >= Math.round(1400000 * (1.20 ** bank))) 
            {
                cookiecount = cookiecount - Math.round(1400000 * (1.20 ** bank))
                bank = bank + 1
                update()
                
            }
            
        }
        function buytemple(params)
        {
            if (cookiecount >= Math.round(20000000 * (1.20 ** temple)))
            {
                cookiecount = cookiecount - Math.round(20000000 * (1.20 ** temple))
                temple = temple + 1
                update()
                
            }
            
        }
        function buywizardtower(params)
        {
            if (cookiecount >= Math.round(330000000 * (1.20 ** wizardTower)))
            {
                cookiecount = cookiecount - Math.round(330000000 * (1.20 ** wizardTower))
                wizardTower = wizardTower + 1
                update()
                
            }
            
        }
        function buyshipment(params)
        {
            if (cookiecount >= Math.round(5100000000 * (1.20 ** shipment)))
            {
                cookiecount = cookiecount - Math.round(5100000000 * (1.20 ** shipment))
                shipment = shipment + 1
                update()
                 
            }
            
        }
        function buyalchemylab()
        {
            if (cookiecount >= Math.round(75000000000 * (1.20 ** alchemyLab)))
            {
                cookiecount = cookiecount - Math.round(75000000000 * (1.20 ** alchemyLab))
                alchemyLab = alchemyLab + 1
                update()
                
            }
        }
        function buyportal(params)
        {
            if (cookiecount >= Math.round(10**12 * (1.20 ** portal)))
            {
                cookiecount = cookiecount - Math.round(10**12 * (1.20 ** portal))
                portal = portal + 1 
                update()
                
            }
            
        }
        function buytimemachine(params)
        {
            if (cookiecount >= Math.round(14*10**12 * (1.20 ** timeMachine))) 
            {
                cookiecount = cookiecount - Math.round(14*10**12 * (1.20 ** timeMachine))
                timeMachine = timeMachine + 1
                update()
                
            }
            
        }