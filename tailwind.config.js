/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    
    fontFamily: {
      'arial': "Arial",
      'times' : "Times New Roman",
      
    },
   
    extend: {
      colors: {
        "283337": "#283337",
        'F3F7F4': '#F3F7F4',
        "40494D" : "#40494D",
        '283337':"#283337",
        '101C21':'#101C21',
        '878D90':'#878D90',
        'CFD2D3':'#CFD2D3',
        '9FA4A6':'#9FA4A6',

        
      },
      spacing: {
        '3px': '3px',
        '10px': '10px',
        '11px': '11px',
        '13px': '13px',
        '14px': '14px',
        '15px': '15px',
        '17px': '17px',
        '19px': '19px',
        '22px': '22px',
        '23px': '23px',
        '25px': '25px',
        '26px':'26px',
        '27px':'27px',
        '30px':'30px',
        '31px':'31px',
        '34px':'34px',
        '35px':'35px',
        '36px':'36px',
        '37px':'37px',
        '39px':'39px',
        '41px':'41px',
        '42px':'42px',
        '43px':'43px',
        '50px':'50px',
        '51px':'51px',
        '52px':'52px',
        '53px':'53px',
        '57px':'57px',
        '56px':'56px',
        '59px':'59px',
        '62px': '62px',
        '63px': '63px',
        '66px': '66px',
        '69px': '69px',
        '75px': '75px',
        '81px': '81px',
        '83px': '83px',
        '84px': '84px',
        '86px': '86px',
        '89px': '89px',
        '97px': '97px',
        '100px': '100px',
        '106px': '106px',
        '120px': '120px',
        '122px': '122px',
        '129px': '129px',
        '134px': '134px',
        '144px': '144px',
        '148px': '148px',
        '150px':'150px',
        '152px':'152px',
        '159px':'159px',
        '160px': '160px',
        '161px': '161px',
        '167px': '167px',
        '170px': '170px',
        '174px': '174px',
        '179px':'179px',
        '190px':'190px',
        '200px':'200px',
        '209px':'209px',
        '219px':'219px',
        '220px':'220px',
        '224px':'224px',
        '231px':'231px',
        '235px':'235px',
        '243px':'243px',
        '278px':'278px',
        '280px':'280px',
        '294px':'294px',
        '329px':'329px',
        '336px':'336px',
        '348px':'348px',
        '367px':'367px',
        '381px':'381px',
        '406px':'406px',
        '448px':'448px',
        '461px':'461px',
        "494px":"454px",
        '560px': '560px',
        '112px' : '112px' , '134px' : '134px' , '179px' : '179px' , '224px' : '224px' , '269px' : '269px' , 
        '38px' : '38px' , '45px' : '45px' , '60px' : '60px' , '75px' : '75px' , '90px' : '90px' , 
        '10px' : '10px' , '11px' : '11px' , '15px' : '15px' , '19px' : '19px' , '23px' : '23px' , 
        '13px' : '13px' , '15px' : '15px' , '20px' : '20px' , '25px' : '25px' , '30px' : '30px' , 
        '203px' : '203px' , '244px' : '244px' , '325px' : '325px' , '406px' : '406px' , '487px' : '487px' , 
        '22px' : '22px' , '26px' : '26px' , '34px' : '34px' , '43px' : '43px' , '52px' : '52px' , 
        '12px' : '12px' , '14px' : '14px' , '19px' : '19px' , '24px' : '24px' , '29px' : '29px' , 
        '30px' : '30px' , '35px' : '35px' , '47px' : '47px' , '59px' : '59px' , '71px' : '71px' , 
        '12px' : '12px' , '14px' : '14px' , '19px' : '19px' , '24px' : '24px' , '29px' : '29px' , 
        '247px' : '247px' , '296px' : '296px' , '395px' : '395px' , '494px' : '494px' , '593px' : '593px' , 
        '116px' : '116px' , '139px' : '139px' , '185px' : '185px' , '231px' : '231px' , '277px' : '277px' , 
        '43px' : '43px' , '52px' : '52px' , '69px' : '69px' , '86px' : '86px' , '103px' : '103px' , 
        '75px' : '75px' , '90px' : '90px' , '120px' : '120px' , '150px' : '150px' , '180px' : '180px' , 
        '72px' : '72px' , '86px' : '86px' , '115px' : '115px' , '144px' : '144px' , '173px' : '173px' , 
        '24px' : '24px' , '29px' : '29px' , '38px' : '38px' , '48px' : '48px' , '58px' : '58px' , 
        '50px' : '50px' , '60px' : '60px' , '80px' : '80px' , '100px' : '100px' , '120px' : '120px' , 
        '53px' : '53px' , '64px' : '64px' , '85px' : '85px' , '106px' : '106px' , '127px' : '127px' , 
 









 
 

        
        
      },
      fontSize: {
        "10-15px": ['10.2px', '15.6px'],
        "10-12px": ['10.2px', '12.6px'],
        "10-21px": ['10.8px', '21.6px'],
        "11px": ['11px', '14px'],
        "13px": ['13px', '15px'],
        "13-20px": ['13.6px', '20.8px'],
        "14-16px": ['14.4px', '16.8px'],
        "14-20px": ['14.4px', '20.8px'],
        "14-28px": ['14.4px', '28.8px'],
        "15-21px": ['15px', '21px'],
        "15px": ['15px', '17px'],
        "16px": ['16px', '18.4px'],
        "16-18px": ['16px', '18px'],
        "17px": ['17px', '21px'],
        "17-26px": ['17px', '26px'],
        "18-21px": ['18px', '21px'],
        "18-26px": ['18px', '26px'],
        "18-36px": ['18px', '36px'],
        "19px": ['19px', '22px'],
        "19-20px": ['19.2px', '20.4px'],
        "21px": ['21px', '31px'],
        "25-27px": ['25.6px', '27.2px'],
        "32px": ['32px', '34px'],
        "33px": ['33px', '36px'],
        "52px": ['52px', '70px'],
        "58px": ['58px', '60px'],
        '26-35px' : ['26.0px' , '35.0px' ] ,'31-42px' : ['31.2px' , '42.0px' ] ,'42-56px' : ['41.6px' , '56.0px' ] ,'52-70px' : ['52.0px' , '70.0px' ] ,'62-84px' : ['62.4px' , '84.0px' ] ,
        '8-12px' : ['8.0px' , '12.0px' ] ,'10-14px' : ['9.6px' , '14.4px' ] ,'13-19px' : ['12.8px' , '19.2px' ] ,'16-24px' : ['16.0px' , '24.0px' ] ,'19-29px' : ['19.2px' , '28.8px' ] ,
        


        
      },
      maxWidth: {
        '100px': '100px',
        '110px': '110px',
        '122px': '122px',
        '145px': '145px',
        '146px': '146px',
        '165px': '165px',
        '162px': '162px',
        '170px': '170px',
        '186px': '186px',
        '190px': '190px',
        '194px': '194px',
        '203px': '203px',
        '218px': '218px',
        '235px':'235px',
        '243px': '243px',
        '262px': '262px',
        '285px': '285px',
        '286px': '286px',
        '290px': '290px',
        '313px':'313px',
        '347px':'347px',
        '363px':'363px',
        '381px':'381px',
        '391px':'391px',
        '548px': '548px',
        '560px': '560px',
        '640px': '640px',
        '109px' : '109px' , '131px' : '131px' , '174px' : '174px' , '218px' : '218px' , '262px' : '262px' , 
        '102px' : '102px' , '122px' : '122px' , '162px' : '162px' , '203px' : '203px' , '244px' : '244px' , 
        '74px' : '74px' , '89px' : '89px' , '118px' : '118px' , '148px' : '148px' , '178px' : '178px' , 

      }
    },
  },
  plugins: [],
}
