var inputUnit= document.getElementById("unit");
var input=document.getElementById("result_input");
var input_select= document.getElementById("input_list");
var output= document.getElementById("result_output");
var output_select=document.getElementById("output_list");

myResult();
input.addEventListener("keyup",myResult);

inputUnit.addEventListener("change",()=>{
    if (inputUnit.value=="length") {
        input_select.innerHTML = "<option value='Selectt' disabled selected>Select</option>";
        output_select.innerHTML = "<option value='Selectt' disabled selected>Select</option>";
        
        var optioncm=document.createElement("option");
        var optionmeter=document.createElement("option");
        var optionkm=document.createElement("option");

        var optioncmip=document.createElement("option");
        var optionmeterip=document.createElement("option");
        var optionkmip=document.createElement("option");
        optioncm.value="CM";
        optionmeter.value="M";
        optionkm.value="KM";

        optioncm.innerText="Centimeter";
        optionkm.innerText="Kilometer";
        optionmeter.innerText="Meter";

        optioncmip.value="CM";
        optionmeterip.value="M";
        optionkmip.value="KM";

        optioncmip.innerText="Centimeter";
        optionkmip.innerText="Kilometer";
        optionmeterip.innerText="Meter";

        input_select.appendChild(optioncmip);
        input_select.appendChild(optionmeterip);
        input_select.appendChild(optionkmip);

        output_select.appendChild(optioncm);
        output_select.appendChild(optionkm);
        output_select.appendChild(optionmeter);

        myResult();

    }
    if (inputUnit.value=="temparature") {
        input_select.innerHTML = "<option value='Selectt' disabled selected>Select</option>";
        output_select.innerHTML = "<option value='Selectt' disabled selected>Select</option>";

        var optioncelsius=document.createElement("option");
        var optionfarenheit=document.createElement("option");
        var optionkelvin=document.createElement("option");

        var optioncelsiusip=document.createElement("option");
        var optionfarenheitip=document.createElement("option");
        var optionkelvinip=document.createElement("option");
        optioncelsius.value="C";
        optionfarenheit.value="F";
        optionkelvin.value="K";

        optioncelsius.innerText="Celsius";
        optionfarenheit.innerText="Farenheit";
        optionkelvin.innerText="Kelvin";

        optioncelsiusip.value="C";
        optionfarenheitip.value="F";
        optionkelvinip.value="K";

        optioncelsiusip.innerText="Celsius";
        optionfarenheitip.innerText="Farenheit";
        optionkelvinip.innerText="Kelvin";

        input_select.appendChild(optioncelsiusip);
        input_select.appendChild(optionfarenheitip);
        input_select.appendChild(optionkelvinip);
        output_select.appendChild(optioncelsius);
        output_select.appendChild(optionfarenheit);
        output_select.appendChild(optionkelvin);

        myResult();

    }
    if (inputUnit.value=="area") {
        input_select.innerHTML = "<option value='Selectt' disabled selected>Select</option>";
        output_select.innerHTML = "<option value='Selectt' disabled selected>Select</option>";

        var optionsqkm=document.createElement("option");
        var optionsqm=document.createElement("option");
        var optionsqft=document.createElement("option");
        var optionhectare=document.createElement("option");
        var optionacre=document.createElement("option");

        var optionsqkmip=document.createElement("option");
        var optionsqmip=document.createElement("option");
        var optionsqftip=document.createElement("option");
        var optionhectareip=document.createElement("option");
        var optionacreip=document.createElement("option");

        optionsqkm.value="SQKM";
        optionsqm.value="SQM";
        optionsqft.value="SQFT";
        optionhectare.value="HECT";
        optionacre.value="ACRE";

        optionsqkm.innerText="Square Kilometer";
        optionsqm.innerText="Square Meter";
        optionsqft.innerText="Square Feet";
        optionhectare.innerText="Hectare";
        optionacre.innerText="Acre";

        optionsqkmip.value="SQKM";
        optionsqmip.value="SQM";
        optionsqftip.value="SQFT";
        optionhectareip.value="HECT";
        optionacreip.value="ACRE";

        optionsqkmip.innerText="Square Kilometer";
        optionsqmip.innerText="Square Meter";
        optionsqftip.innerText="Square Feet";
        optionhectareip.innerText="Hectare";
        optionacreip.innerText="Acre";
        input_select.appendChild(optionsqkmip);
        input_select.appendChild(optionsqmip);
        input_select.appendChild(optionsqftip);
        input_select.appendChild(optionhectareip);
        input_select.appendChild(optionacreip);

        output_select.appendChild(optionsqkm);
        output_select.appendChild(optionsqm);
        output_select.appendChild(optionsqft);
        output_select.appendChild(optionhectare);
        output_select.appendChild(optionacre);

        myResult();

    }
    if (inputUnit.value=="volume") {
        input_select.innerHTML = "<option value='Selectt' disabled selected>Select</option>";
        output_select.innerHTML = "<option value='Selectt' disabled selected>Select</option>";

        var optiongallon=document.createElement("option");
        var optionounce=document.createElement("option");
        var optionmcube=document.createElement("option");
        var optionlitre=document.createElement("option");
        var optionmillilitre=document.createElement("option");

        var optiongallonip=document.createElement("option");
        var optionounceip=document.createElement("option");
        var optionmcubeip=document.createElement("option");
        var optionlitreip=document.createElement("option");
        var optionmillilitreip=document.createElement("option");
        
        optiongallon.value="GALLON";
        optionounce.value="OUNCE";
        optionmcube.value="MCUBE";
        optionlitre.value="LITER";
        optionmillilitre.value="ML";

        optiongallon.innerText="Gallon";
        optionounce.innerText="Ounce";
        optionmcube.innerText="Cubic Meter";
        optionlitre.innerText="Litre";
        optionmillilitre.innerText="Millilitre";

        optiongallonip.value="GALLON";
        optionounceip.value="OUNCE";
        optionmcubeip.value="MCUBE";
        optionlitreip.value="LITER";
        optionmillilitreip.value="ML";

        optiongallonip.innerText="Gallon";
        optionounceip.innerText="Ounce";
        optionmcubeip.innerText="Cubic Meter";
        optionlitreip.innerText="Litre";
        optionmillilitreip.innerText="Millilitre";

        input_select.appendChild(optiongallonip);
        input_select.appendChild(optionounceip);
        input_select.appendChild(optionmcubeip);
        input_select.appendChild(optionlitreip);
        input_select.appendChild(optionmillilitreip);

        output_select.appendChild(optiongallon);
        output_select.appendChild(optionounce);
        output_select.appendChild(optionmcube);
        output_select.appendChild(optionlitre);
        output_select.appendChild(optionmillilitre);

        myResult();

    }
    if (inputUnit.value=="weight") {
        input_select.innerHTML = "<option value='Selectt' disabled selected>Select</option>";
        output_select.innerHTML = "<option value='Selectt' disabled selected>Select</option>";

        var optiontonne=document.createElement("option");
        var optionkg=document.createElement("option");
        var optiongram=document.createElement("option");
        var optionmg=document.createElement("option");
        var optionpound=document.createElement("option");

        var optiontonneip=document.createElement("option");
        var optionkgip=document.createElement("option");
        var optiongramip=document.createElement("option");
        var optionmgip=document.createElement("option");
        var optionpoundip=document.createElement("option");

        optiontonne.value="TON";
        optionkg.value="KG";
        optiongram.value="GM";
        optionmg.value="MG";
        optionpound.value="POUND";

        optiontonne.innerText="Tonne";
        optionkg.innerText="Kilograms";
        optiongram.innerText="Grams";
        optionmg.innerText="Milligrams";
        optionpound.innerText="Pounds";

        optiontonneip.value="TON";
        optionkgip.value="KG";
        optiongramip.value="GM";
        optionmgip.value="MG";
        optionpoundip.value="POUND";

        optiontonneip.innerText="Tonne";
        optionkgip.innerText="Kilograms";
        optiongramip.innerText="Grams";
        optionmgip.innerText="Milligrams";
        optionpoundip.innerText="Pounds";

        input_select.appendChild(optiontonneip);
        input_select.appendChild(optionkgip);
        input_select.appendChild(optiongramip);
        input_select.appendChild(optionmgip);
        input_select.appendChild(optionpoundip);

        output_select.appendChild(optiontonne);
        output_select.appendChild(optionkg);
        output_select.appendChild(optiongram);
        output_select.appendChild(optionmg);
        output_select.appendChild(optionpound);

        myResult();

    }
    if (inputUnit.value=="time") {
        input_select.innerHTML = "<option value='Selectt' disabled selected>Select</option>";
        output_select.innerHTML = "<option value='Selectt' disabled selected>Select</option>";
        
        var optionms=document.createElement("option");
        var optionsec=document.createElement("option");
        var optionmin=document.createElement("option");
        var optionhour=document.createElement("option");
        var optionday=document.createElement("option");
        var optionweek=document.createElement("option");
        var optionmonth=document.createElement("option");
        var optionyear=document.createElement("option");
        var optiondecade=document.createElement("option");
        var optioncentury=document.createElement("option");

        var optionmsip=document.createElement("option");
        var optionsecip=document.createElement("option");
        var optionminip=document.createElement("option");
        var optionhourip=document.createElement("option");
        var optiondayip=document.createElement("option");
        var optionweekip=document.createElement("option");
        var optionmonthip=document.createElement("option");
        var optionyearip=document.createElement("option");
        var optiondecadeip=document.createElement("option");
        var optioncenturyip=document.createElement("option");

        optionms.value="MS";
        optionsec.value="SEC";
        optionmin.value="MIN";
        optionhour.value="HR";
        optionday.value="DAY";
        optionweek.value="WEEK";
        optionmonth.value="MNTH";
        optionyear.value="YR";
        optiondecade.value="DECDE";
        optioncentury.value="CENTRY";

        optionms.innerText="Millisecond";
        optionsec.innerText="Second";
        optionmin.innerText="Minute";
        optionhour.innerText="Hour";
        optionday.innerText="Day";
        optionweek.innerText="Week";
        optionmonth.innerText="Month";
        optionyear.innerText="Year";
        optiondecade.innerText="Decade";
        optioncentury.innerText="Century";

        optionmsip.value="MS";
        optionsecip.value="SEC";
        optionminip.value="MIN";
        optionhourip.value="HR";
        optiondayip.value="DAY";
        optionweekip.value="WEEK";
        optionmonthip.value="MNTH";
        optionyearip.value="YR";
        optiondecadeip.value="DECDE";
        optioncenturyip.value="CENTRY";

        optionmsip.innerText="Millisecond";
        optionsecip.innerText="Second";
        optionminip.innerText="Minute";
        optionhourip.innerText="Hour";
        optiondayip.innerText="Day";
        optionweekip.innerText="Week";
        optionmonthip.innerText="Month";
        optionyearip.innerText="Year";
        optiondecadeip.innerText="Decade";
        optioncenturyip.innerText="Century";

        input_select.appendChild(optionmsip);
        input_select.appendChild(optionsecip);
        input_select.appendChild(optionminip);
        input_select.appendChild(optionhourip);
        input_select.appendChild(optiondayip);
        input_select.appendChild(optionweekip);
        input_select.appendChild(optionmonthip);
        input_select.appendChild(optionyearip);
        input_select.appendChild(optiondecadeip);
        input_select.appendChild(optioncenturyip);

        output_select.appendChild(optionms);
        output_select.appendChild(optionsec);
        output_select.appendChild(optionmin);
        output_select.appendChild(optionhour);
        output_select.appendChild(optionday);
        output_select.appendChild(optionweek);
        output_select.appendChild(optionmonth);
        output_select.appendChild(optionyear);
        output_select.appendChild(optiondecade);
        output_select.appendChild(optioncentury);

        myResult();

    }
})


function myResult(){
    if(inputUnit.value=="length"){
        if(input_select.value==="M" && output_select.value==="KM"){
            output.value=Number(input.value) *0.001;
        }else if(input_select.value==='M' && output_select.value==='CM'){
            output.value=Number(input.value)*100;
        }else if(input_select.value==='M' && output_select.value==='M'){
            output.value=input.value;
        }
        if (input_select.value==='KM' && output_select.value==='CM') {
            output.value=Number(input.value)*100000;
        }else if (input_select.value==='KM' && output_select.value==='M') {
            output.value=Number(input.value)*1000;
        }else if(input_select.value==='KM' && output_select.value==='KM'){
            output.value=input.value;
        }
        if (input_select.value==='CM' && output_select.value==='M'){
            output.value=Number(input.value)*0.01;
        }else if(input_select.value==='CM' && output_select.value==='KM'){
            output.value=Number(input.value)*0.00001;
        }else if(input_select.value==='CM' && output_select.value==='CM'){
            output.value=input.value;
        }
    }
    if(inputUnit.value=="temparature"){
        if (input_select.value==='C' && output_select.value==='C'){
            input.value=output.value;
        }else if(input_select.value==='C' && output_select.value==='K'){
            output.value=Number(input.value)+273.15;
        }else if(input_select.value==='C' && output_select.value==='F'){
            output.value=(Number(input.value)*(1.8))+32;
        }
        if (input_select.value==='F' && output_select.value==='F'){
            input.value=output.value;
        }else if(input_select.value==='F' && output_select.value==='K'){
            output.value=((Number(input.value)-32)*(5/9))+273.15;
        }else if(input_select.value==='F' && output_select.value==='C'){
            output.value=(Number(input.value)-32)*(5/9);
        }
        if (input_select.value==='K' && output_select.value==='K'){
            input.value=output.value;
        }else if(input_select.value==='K' && output_select.value==='F'){
            output.value=((Number(input.value)-273.15)*(9/5))+32;
        }else if(input_select.value==='K' && output_select.value==='C'){
            output.value=Number(input.value)-273.15;
        }
    }
    if(inputUnit.value=="area"){
        if (input_select.value==='SQKM' && output_select.value==='SQKM'){
            input.value=output.value;
        }else if(input_select.value==='SQKM' && output_select.value==='SQM'){
            output.value=Number(input.value)*1000000;
        }else if(input_select.value==='SQKM' && output_select.value==='SQFT'){
            output.value=Number(input.value)*10760000;
        }else if(input_select.value==='SQKM' && output_select.value==='HECT'){
            output.value=Number(input.value)*100;
        }else if(input_select.value==='SQKM' && output_select.value==='ACRE'){
            output.value=Number(input.value)*247.1;
        }
        if (input_select.value==='SQM' && output_select.value==='SQM'){
            input.value=output.value;
        }else if(input_select.value==='SQM' && output_select.value==='SQKM'){
            output.value=Number(input.value)/1000000;
        }else if(input_select.value==='SQM' && output_select.value==='SQFT'){
            output.value=Number(input.value)*10.764;
        }else if(input_select.value==='SQM' && output_select.value==='HECT'){
            output.value=Number(input.value)/10000;
        }else if(input_select.value==='SQM' && output_select.value==='ACRE'){
            output.value=Number(input.value)/4047;
        }
        if (input_select.value==='SQFT' && output_select.value==='SQFT'){
            input.value=output.value;
        }else if(input_select.value==='SQFT' && output_select.value==='SQKM'){
            output.value=Number(input.value)/10760000;
        }else if(input_select.value==='SQFT' && output_select.value==='SQM'){
            output.value=Number(input.value)/10.764;
        }else if(input_select.value==='SQFT' && output_select.value==='HECT'){
            output.value=Number(input.value)/107600;
        }else if(input_select.value==='SQFT' && output_select.value==='ACRE'){
            output.value=Number(input.value)/43560;
        }
        if (input_select.value==='HECT' && output_select.value==='HECT'){
            input.value=output.value;
        }else if(input_select.value==='HECT' && output_select.value==='SQKM'){
            output.value=Number(input.value)/100;
        }else if(input_select.value==='HECT' && output_select.value==='SQM'){
            output.value=Number(input.value)*10000;
        }else if(input_select.value==='HECT' && output_select.value==='SQFT'){
            output.value=Number(input.value)*107600;
        }else if(input_select.value==='HECT' && output_select.value==='ACRE'){
            output.value=Number(input.value)*2.471;
        }
        if (input_select.value==='ACRE' && output_select.value==='ACRE'){
            input.value=output.value;
        }else if(input_select.value==='ACRE' && output_select.value==='SQKM'){
            output.value=Number(input.value)/247.1;
        }else if(input_select.value==='ACRE' && output_select.value==='SQM'){
            output.value=Number(input.value)*4047;
        }else if(input_select.value==='ACRE' && output_select.value==='SQFT'){
            output.value=Number(input.value)*43560;
        }else if(input_select.value==='ACRE' && output_select.value==='HECT'){
            output.value=Number(input.value)/2.471;
        }
    }
    if(inputUnit.value=="volume"){
        if (input_select.value==='GALLON' && output_select.value==='GALLON'){
            input.value=output.value;
        }else if(input_select.value==='GALLON' && output_select.value==='OUNCE'){
            output.value=Number(input.value)*128;
        }else if(input_select.value==='GALLON' && output_select.value==='MCUBE'){
            output.value=Number(input.value)/264.2;
        }else if(input_select.value==='GALLON' && output_select.value==='LITER'){
            output.value=Number(input.value)*3.785;
        }else if(input_select.value==='GALLON' && output_select.value==='ML'){
            output.value=Number(input.value)*3785;
        }
        if (input_select.value==='OUNCE' && output_select.value==='OUNCE'){
            input.value=output.value;
        }else if(input_select.value==='OUNCE' && output_select.value==='GALLON'){
            output.value=Number(input.value)/128;
        }else if(input_select.value==='OUNCE' && output_select.value==='MCUBE'){
            output.value=Number(input.value)/33810;
        }else if(input_select.value==='OUNCE' && output_select.value==='LITER'){
            output.value=Number(input.value)/33.814;
        }else if(input_select.value==='OUNCE' && output_select.value==='ML'){
            output.value=Number(input.value)*29.574;
        }
        if (input_select.value==='MCUBE' && output_select.value==='MCUBE'){
            input.value=output.value;
        }else if(input_select.value==='MCUBE' && output_select.value==='GALLON'){
            output.value=Number(input.value)*264.2;
        }else if(input_select.value==='MCUBE' && output_select.value==='OUNCE'){
            output.value=Number(input.value)*33810;
        }else if(input_select.value==='MCUBE' && output_select.value==='LITER'){
            output.value=Number(input.value)*1000;
        }else if(input_select.value==='MCUBE' && output_select.value==='ML'){
            output.value=Number(input.value)*1000000;
        }
        if (input_select.value==='LITER' && output_select.value==='LITER'){
            input.value=output.value;
        }else if(input_select.value==='LITER' && output_select.value==='GALLON'){
            output.value=Number(input.value)/3.785;
        }else if(input_select.value==='LITER' && output_select.value==='OUNCE'){
            output.value=Number(input.value)*33.814;
        }else if(input_select.value==='LITER' && output_select.value==='MCUBE'){
            output.value=Number(input.value)/1000;
        }else if(input_select.value==='LITER' && output_select.value==='ML'){
            output.value=Number(input.value)*1000;
        }
        if (input_select.value==='ML' && output_select.value==='ML'){
            input.value=output.value;
        }else if(input_select.value==='ML' && output_select.value==='GALLON'){
            output.value=Number(input.value)/3785;
        }else if(input_select.value==='ML' && output_select.value==='OUNCE'){
            output.value=Number(input.value)/29.574;
        }else if(input_select.value==='ML' && output_select.value==='MCUBE'){
            output.value=Number(input.value)/1000000;
        }else if(input_select.value==='ML' && output_select.value==='LITER'){
            output.value=Number(input.value)/1000;
        }
    }
    if(inputUnit.value=="weight"){
        if (input_select.value==='TON' && output_select.value==='TON'){
            input.value=output.value;
        }else if(input_select.value==='TON' && output_select.value==='KG'){
            output.value=Number(input.value)*1000;
        }else if(input_select.value==='TON' && output_select.value==='GM'){
            output.value=Number(input.value)*1000000;
        }else if(input_select.value==='TON' && output_select.value==='MG'){
            output.value=Number(input.value)*1000000000;
        }else if(input_select.value==='TON' && output_select.value==='POUND'){
            output.value=Number(input.value)*2205;
        }
        if (input_select.value==='KG' && output_select.value==='KG'){
            input.value=output.value;
        }else if(input_select.value==='KG' && output_select.value==='TON'){
            output.value=Number(input.value)/1000;
        }else if(input_select.value==='KG' && output_select.value==='GM'){
            output.value=Number(input.value)*1000;
        }else if(input_select.value==='KG' && output_select.value==='MG'){
            output.value=Number(input.value)*1000000;
        }else if(input_select.value==='KG' && output_select.value==='POUND'){
            output.value=Number(input.value)*2.205;
        }
        if (input_select.value==='GM' && output_select.value==='GM'){
            input.value=output.value;
        }else if(input_select.value==='GM' && output_select.value==='TON'){
            output.value=Number(input.value)/1000000;
        }else if(input_select.value==='GM' && output_select.value==='KG'){
            output.value=Number(input.value)/1000;
        }else if(input_select.value==='GM' && output_select.value==='MG'){
            output.value=Number(input.value)*1000;
        }else if(input_select.value==='GM' && output_select.value==='POUND'){
            output.value=Number(input.value)/453.6;
        }
        if (input_select.value==='MG' && output_select.value==='MG'){
            input.value=output.value;
        }else if(input_select.value==='MG' && output_select.value==='TON'){
            output.value=Number(input.value)/1000000000;
        }else if(input_select.value==='MG' && output_select.value==='KG'){
            output.value=Number(input.value)/1000000;
        }else if(input_select.value==='MG' && output_select.value==='GM'){
            output.value=Number(input.value)/1000;
        }else if(input_select.value==='MG' && output_select.value==='POUND'){
            output.value=Number(input.value)/453600;
        }
        if (input_select.value==='POUND' && output_select.value==='POUND'){
            input.value=output.value;
        }else if(input_select.value==='POUND' && output_select.value==='TON'){
            output.value=Number(input.value)/2205;
        }else if(input_select.value==='POUND' && output_select.value==='KG'){
            output.value=Number(input.value)/2.205;
        }else if(input_select.value==='POUND' && output_select.value==='GM'){
            output.value=Number(input.value)*453.6;
        }else if(input_select.value==='POUND' && output_select.value==='MG'){
            output.value=Number(input.value)*453600;
        }
    }
    if(inputUnit.value=="time"){
        if (input_select.value==='MS' && output_select.value==='MS'){
            input.value=output.value;
        }else if(input_select.value==='MS' && output_select.value==='SEC'){
            output.value=Number(input.value)/1000;
        }else if(input_select.value==='MS' && output_select.value==='MIN'){
            output.value=Number(input.value)/60000;
        }else if(input_select.value==='MS' && output_select.value==='HR'){
            output.value=Number(input.value)/3600000;
        }else if(input_select.value==='MS' && output_select.value==='DAY'){
            output.value=Number(input.value)/86400000;
        }else if(input_select.value==='MS' && output_select.value==='WEEK'){
            output.value=Number(input.value)/604800000;
        }else if(input_select.value==='MS' && output_select.value==='MNTH'){
            output.value=Number(input.value)/2628000000;
        }else if(input_select.value==='MS' && output_select.value==='YR'){
            output.value=Number(input.value)/31540000000;
        }else if(input_select.value==='MS' && output_select.value==='DECDE'){
            output.value=Number(input.value)/315400000000;
        }else if(input_select.value==='MS' && output_select.value==='CENTRY'){
            output.value=Number(input.value)/3154000000000;
        }
        if (input_select.value==='SEC' && output_select.value==='SEC'){
            input.value=output.value;
        }else if(input_select.value==='SEC' && output_select.value==='MS'){
            output.value=Number(input.value)*1000;
        }else if(input_select.value==='SEC' && output_select.value==='MIN'){
            output.value=Number(input.value)/60;
        }else if(input_select.value==='SEC' && output_select.value==='HR'){
            output.value=Number(input.value)/3600;
        }else if(input_select.value==='SEC' && output_select.value==='DAY'){
            output.value=Number(input.value)/86400;
        }else if(input_select.value==='SEC' && output_select.value==='WEEK'){
            output.value=Number(input.value)/604800;
        }else if(input_select.value==='SEC' && output_select.value==='MNTH'){
            output.value=Number(input.value)/2628000;
        }else if(input_select.value==='SEC' && output_select.value==='YR'){
            output.value=Number(input.value)/31540000;
        }else if(input_select.value==='SEC' && output_select.value==='DECDE'){
            output.value=Number(input.value)/315400000;
        }else if(input_select.value==='SEC' && output_select.value==='CENTRY'){
            output.value=Number(input.value)/3154000000;
        }
        if (input_select.value==='MIN' && output_select.value==='MIN'){
            input.value=output.value;
        }else if(input_select.value==='MIN' && output_select.value==='MS'){
            output.value=Number(input.value)*60000;
        }else if(input_select.value==='MIN' && output_select.value==='SEC'){
            output.value=Number(input.value)*60;
        }else if(input_select.value==='MIN' && output_select.value==='HR'){
            output.value=Number(input.value)/60;
        }else if(input_select.value==='MIN' && output_select.value==='DAY'){
            output.value=Number(input.value)/1440;
        }else if(input_select.value==='MIN' && output_select.value==='WEEK'){
            output.value=Number(input.value)/10080;
        }else if(input_select.value==='MIN' && output_select.value==='MNTH'){
            output.value=Number(input.value)/43800;
        }else if(input_select.value==='MIN' && output_select.value==='YR'){
            output.value=Number(input.value)/525600;
        }else if(input_select.value==='MIN' && output_select.value==='DECDE'){
            output.value=Number(input.value)/5256000;
        }else if(input_select.value==='MIN' && output_select.value==='CENTRY'){
            output.value=Number(input.value)/52560000;
        }
        if (input_select.value==='HR' && output_select.value==='HR'){
            input.value=output.value;
        }else if(input_select.value==='HR' && output_select.value==='MS'){
            output.value=Number(input.value)*3600000;
        }else if(input_select.value==='HR' && output_select.value==='SEC'){
            output.value=Number(input.value)*3600;
        }else if(input_select.value==='HR' && output_select.value==='MIN'){
            output.value=Number(input.value)*60;
        }else if(input_select.value==='HR' && output_select.value==='DAY'){
            output.value=Number(input.value)/24;
        }else if(input_select.value==='HR' && output_select.value==='WEEK'){
            output.value=Number(input.value)/168;
        }else if(input_select.value==='HR' && output_select.value==='MNTH'){
            output.value=Number(input.value)/730;
        }else if(input_select.value==='HR' && output_select.value==='YR'){
            output.value=Number(input.value)/8760;
        }else if(input_select.value==='HR' && output_select.value==='DECDE'){
            output.value=Number(input.value)/87600;
        }else if(input_select.value==='HR' && output_select.value==='CENTRY'){
            output.value=Number(input.value)/876000;
        }
        if (input_select.value==='DAY' && output_select.value==='DAY'){
            input.value=output.value;
        }else if(input_select.value==='DAY' && output_select.value==='MS'){
            output.value=Number(input.value)*86400000;
        }else if(input_select.value==='DAY' && output_select.value==='SEC'){
            output.value=Number(input.value)*86400;
        }else if(input_select.value==='DAY' && output_select.value==='MIN'){
            output.value=Number(input.value)*1440;
        }else if(input_select.value==='DAY' && output_select.value==='HR'){
            output.value=Number(input.value)*24;
        }else if(input_select.value==='DAY' && output_select.value==='WEEK'){
            output.value=Number(input.value)/7;
        }else if(input_select.value==='DAY' && output_select.value==='MNTH'){
            output.value=Number(input.value)/30.417;
        }else if(input_select.value==='DAY' && output_select.value==='YR'){
            output.value=Number(input.value)/365;
        }else if(input_select.value==='DAY' && output_select.value==='DECDE'){
            output.value=Number(input.value)/3650;
        }else if(input_select.value==='DAY' && output_select.value==='CENTRY'){
            output.value=Number(input.value)/36500;
        }
        if (input_select.value==='WEEK' && output_select.value==='WEEK'){
            input.value=output.value;
        }else if(input_select.value==='WEEK' && output_select.value==='MS'){
            output.value=Number(input.value)*604800000;
        }else if(input_select.value==='WEEK' && output_select.value==='SEC'){
            output.value=Number(input.value)*604800;
        }else if(input_select.value==='WEEK' && output_select.value==='MIN'){
            output.value=Number(input.value)*10080;
        }else if(input_select.value==='WEEK' && output_select.value==='HR'){
            output.value=Number(input.value)*168;
        }else if(input_select.value==='WEEK' && output_select.value==='DAY'){
            output.value=Number(input.value)*7;
        }else if(input_select.value==='WEEK' && output_select.value==='MNTH'){
            output.value=Number(input.value)/4.345;
        }else if(input_select.value==='WEEK' && output_select.value==='YR'){
            output.value=Number(input.value)/52.143;
        }else if(input_select.value==='WEEK' && output_select.value==='DECDE'){
            output.value=Number(input.value)/521.4;
        }else if(input_select.value==='WEEK' && output_select.value==='CENTRY'){
            output.value=Number(input.value)/5214;
        }
        if (input_select.value==='MNTH' && output_select.value==='MNTH'){
            input.value=output.value;
        }else if(input_select.value==='MNTH' && output_select.value==='MS'){
            output.value=Number(input.value)*(2.628*1000000000);
        }else if(input_select.value==='MNTH' && output_select.value==='SEC'){
            output.value=Number(input.value)*(2.628*1000000);
        }else if(input_select.value==='MNTH' && output_select.value==='MIN'){
            output.value=Number(input.value)*43800;
        }else if(input_select.value==='MNTH' && output_select.value==='HR'){
            output.value=Number(input.value)*730;
        }else if(input_select.value==='MNTH' && output_select.value==='DAY'){
            output.value=Number(input.value)*30.417;
        }else if(input_select.value==='MNTH' && output_select.value==='WEEK'){
            output.value=Number(input.value)*4.345;
        }else if(input_select.value==='MNTH' && output_select.value==='YR'){
            output.value=Number(input.value)/12;
        }else if(input_select.value==='MNTH' && output_select.value==='DECDE'){
            output.value=Number(input.value)/120;
        }else if(input_select.value==='MNTH' && output_select.value==='CENTRY'){
            output.value=Number(input.value)/1200;
        }
        if (input_select.value==='YR' && output_select.value==='YR'){
            input.value=output.value;
        }else if(input_select.value==='YR' && output_select.value==='MS'){
            output.value=Number(input.value)*(3.154*10000000000);
        }else if(input_select.value==='YR' && output_select.value==='SEC'){
            output.value=Number(input.value)*(2.628*10000000);
        }else if(input_select.value==='YR' && output_select.value==='MIN'){
            output.value=Number(input.value)*525600;
        }else if(input_select.value==='YR' && output_select.value==='HR'){
            output.value=Number(input.value)*8760;
        }else if(input_select.value==='YR' && output_select.value==='DAY'){
            output.value=Number(input.value)*365;
        }else if(input_select.value==='YR' && output_select.value==='WEEK'){
            output.value=Number(input.value)*52.143;
        }else if(input_select.value==='YR' && output_select.value==='MNTH'){
            output.value=Number(input.value)*12;
        }else if(input_select.value==='YR' && output_select.value==='DECDE'){
            output.value=Number(input.value)/10;
        }else if(input_select.value==='YR' && output_select.value==='CENTRY'){
            output.value=Number(input.value)/100;
        }
        if (input_select.value==='DECDE' && output_select.value==='DECDE'){
            input.value=output.value;
        }else if(input_select.value==='DECDE' && output_select.value==='MS'){
            output.value=Number(input.value)*(3.154*100000000000);
        }else if(input_select.value==='DECDE' && output_select.value==='SEC'){
            output.value=Number(input.value)*(2.628*100000000);
        }else if(input_select.value==='DECDE' && output_select.value==='MIN'){
            output.value=Number(input.value)*5256000;
        }else if(input_select.value==='DECDE' && output_select.value==='HR'){
            output.value=Number(input.value)*87600;
        }else if(input_select.value==='DECDE' && output_select.value==='DAY'){
            output.value=Number(input.value)*3650;
        }else if(input_select.value==='DECDE' && output_select.value==='WEEK'){
            output.value=Number(input.value)*521.430;
        }else if(input_select.value==='DECDE' && output_select.value==='MNTH'){
            output.value=Number(input.value)*120;
        }else if(input_select.value==='DECDE' && output_select.value==='YR'){
            output.value=Number(input.value)*10;
        }else if(input_select.value==='DECDE' && output_select.value==='CENTRY'){
            output.value=Number(input.value)/10;
        }
        if (input_select.value==='CENTRY' && output_select.value==='CENTRY'){
            input.value=output.value;
        }else if(input_select.value==='CENTRY' && output_select.value==='MS'){
            output.value=Number(input.value)*(3.154*1000000000000);
        }else if(input_select.value==='CENTRY' && output_select.value==='SEC'){
            output.value=Number(input.value)*(2.628*1000000000);
        }else if(input_select.value==='CENTRY' && output_select.value==='MIN'){
            output.value=Number(input.value)*52560000;
        }else if(input_select.value==='CENTRY' && output_select.value==='HR'){
            output.value=Number(input.value)*876000;
        }else if(input_select.value==='CENTRY' && output_select.value==='DAY'){
            output.value=Number(input.value)*36500;
        }else if(input_select.value==='CENTRY' && output_select.value==='WEEK'){
            output.value=Number(input.value)*5214.30;
        }else if(input_select.value==='CENTRY' && output_select.value==='MNTH'){
            output.value=Number(input.value)*1200;
        }else if(input_select.value==='CENTRY' && output_select.value==='YR'){
            output.value=Number(input.value)*100;
        }else if(input_select.value==='CENTRY' && output_select.value==='DECDE'){
            output.value=Number(input.value)*10;
        }
    }
}