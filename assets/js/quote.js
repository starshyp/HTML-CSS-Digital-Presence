//show fields
window.onload = function() {
  document.getElementById("number-of-floors").style.display = "none";
  document.getElementById("number-of-basements").style.display = "none";
  document.getElementById("number-of-companies").style.display = "none";
  document.getElementById("number-of-parking-spots").style.display = "none";
  document.getElementById("maximum-occupancy").style.display = "none";
  document.getElementById("business-hours").style.display = "none";
  document.getElementById("number-of-apartments").style.display = "none";
  document.getElementById("number-of-corporations").style.display = "none";
  document.getElementById("number-of-elevators").style.display = "none";
};

// document.getElementById('quote-form').addEventListener('change', elevatorCalc);
// const buildingTypeStorage = buildingType.options[buildingType.selectedIndex].value
// document.querySelector('#building-type').textContent = buildingTypeStorage;

const buildingType = document.getElementById("building-type");

// function buildingType(type) {
//     document.getElementById("building-type").value = type;
// };

// document.querySelector("#residential").addEventListener('select', residential);
// document.querySelector("#hybrid").addEventListener('select', corporateHybrid);
// document.querySelector("#commercial").addEventListener('select', commercial);
// document.querySelector("#corporate").addEventListener('select', corporateHybrid);

//
// const res = buildingType("residential");
// const com = buildingType("commercial");
// const cor = buildingType("corporate");
// const hyb = buildingType("hybrid");

// document
//   .querySelector("#residential")
//   .addEventListener("select", function() {
//     residential();
//   });

// buildingType.preventDefault();
// const buildingType = document.getElementById("building-type").value.addEventListener('select', console);
//
// function console(e) {
//   console.log('Submitted');
// }

// let buildingType = document.getElementById('building-type').value;
// buildingType.addEventListener('onclick', function(){
//   console.log('Selected!');
// });

//elevator calc //from quote form
const elevators = document.getElementById('number-of-elevators-input');
const apartments = document.getElementById('number-of-apartments-input');
const floors = document.getElementById('number-of-floors-input');
const occupancy = document.getElementById('maximum-occupancy-input');
const basements = document.getElementById('number-of-basements-input');
const companies = document.getElementById('number-of-companies-input');
const parkingSpots = document.getElementById('number-of-parking-spots-input');
const businessHours = document.getElementById('business-hours-input');
const corporations = document.getElementById('number-of-corporations-input');
// const form = document.querySelector('#quote-form');
//from results form
// const results = document.querySelector('#results');
let elevatorAmt = document.getElementById('elevator-amount-output');

// jQuery("#elevator-amount-output").change(function() {
//   elevatorCalc();
// });

// function a(event) {
//   event.preventDefault();
//   let buildingType = document.getElementById("building-type");
//
//   if (buildingType.value === "")
// }

// buildingType.addEventListener("click", function() {
//   const floors = document.getElementById('number-of-floors-input');
//   if (buildingType === "commercial") {
//     commercial();
//   console.log(buildingType);
//   } else if (buildingType === "residential" && floors.value <= 20) {
//     residential();
//   console.log(buildingType);
//   } else if (buildingType === "residential" && floors.value > 20) {
//     residential20();
//   console.log(buildingType);
//   } else if (buildingType === "corporate" || buildingType === "hybrid") {
//     corporateHybrid();
//   console.log(buildingType);
//   }
// });

// function btSelector() {
//   const bt = buildingType.value;
//   buildingType.innerHTML = bt
// }

// jQuery("#building-type").change(function() {
//   elevatorCalc();
// });

// buildingType.addEventListener("click", function() {
//   let bt = document.querySelector('#dropdown-item');
//   let str = "";
//
//   for (let i=0; i < bt.length; i++) {
//     bt[i].classList.remove("active");
//   }
//   this.classList.add("active");
//   $(".active").each(function() {
//     str += $(this).text() + " ";
//   });
// });
//
// $("#building-type").click(function() {
//   let bt = $(".dropdown-item");
//   let str = "";
//
//   for (let i=0; i < bt.length; i++) {
//     bt[i].classList.remove("active");
//   }
//   this.classList.add("active");
//   $(".active").each(function() {
//     str += $(this).text() + " ";
//   });
// });

function elevatorCalc() {
  console.log(buildingType.value);
  const floors = document.getElementById('number-of-floors-input');
  if (buildingType.value === "commercial") {
    commercial();
  console.log(buildingType);
  } else if (buildingType.value === "residential" && floors.value <= 20) {
    residential();
  console.log(buildingType);
  } else if (buildingType.value === "residential" && floors.value > 20) {
    residential20();
  console.log(buildingType);
  } else if (buildingType.value === "corporate" || buildingType.value === "hybrid") {
    corporateHybrid();
  console.log(buildingType);
  }
};

function commercial() {
  const elevators = document.getElementById('number-of-elevators-input');
  //# of elevator shafts to be deployed = cages required
  let liftCages = parseInt(elevators.value);
  document.getElementById('elevator-amount-output').value = Math.ceil(liftCages);
  document.getElementById('elevators-final-output').value = Math.ceil(liftCages);
};

function residential() {
  let floors = document.getElementById('number-of-floors-input');
  let apartments = document.getElementById('number-of-apartments-input');
  //divide no. of apartments by floors = avg. doors per floors
  let avgDoorsPerFloor = apartments.value / floors.value;
  //require an elevator for every 6 apartments
  let shafts = avgDoorsPerFloor / 6;
  let colsReq = (floors.value / 20);
  document.getElementById('elevator-amount-output').value = Math.ceil(shafts);
  document.getElementById('columns-req-output').value = Math.ceil(colsReq);
  document.getElementById('elevators-final-output').value = Math.ceil(shafts);
  // return form.innerHTML('change', function(e) {
  //   document.getElementById('elevator-amount').innerHTML = shafts;
  // })
};

function residential20() {
  const floors = document.getElementById('number-of-floors-input');
  const apartments = document.getElementById('number-of-apartments-input');
  //divide no. of apartments by floors = avg. doors per floors
  let avgDoorsPerFloor = apartments.value / floors.value;
  //require an elevator for every 6 apartments
  let shafts = (avgDoorsPerFloor / 6) * 2;
  //More than 20 stories = shafts x 2
  let shaftsDouble = (shafts * 2);
  let colsReq = (floors.value / 20);
  document.getElementById('elevator-amount-output').value = Math.ceil(shaftsDouble);
  document.getElementById('columns-req-output').value = Math.ceil(colsReq);
  document.getElementById('elevators-final-output').value = Math.ceil(shaftsDouble);
};

function corporateHybrid() {
  const occupancy = document.getElementById('maximum-occupancy-input');
  const floors = document.getElementById('number-of-floors-input');
  const basements = document.getElementById('number-of-basements-input');
  const elevators = document.getElementById('number-of-elevators-input');
//num. of ppl per floor x num. of floors (+ basements) = num. of occupants
  let totalOccupants = occupancy.value * floors.value;
  console.log(totalOccupants)
//num. of occupants / 1000 = num. of elevators
  let elevatorsReq = totalOccupants / 1000;
  console.log(elevatorsReq);
//num. of stories (+ basements) / 20 = num. of elevator columns
  let colsReq = (floors.value) / 20;
  console.log(colsReq);
//num. elevators / num. of elevator columns = elevators per column
  let elevatorsPerCol = elevatorsReq / colsReq;
  console.log(elevatorsPerCol);
  let totalElevators = elevatorsPerCol * colsReq;
  document.getElementById('elevator-amount-output').value = Math.ceil(elevatorsReq);
  document.getElementById('columns-req-output').value = Math.ceil(colsReq);
  document.getElementById('elevators-columns-rounded-output').value = Math.ceil(elevatorsPerCol);
  document.getElementById('elevators-final-output').value = Math.ceil(totalElevators);
      // return form.innerHTML('change', function(e) {
      //   document.getElementById('elevator-amount').innerHTML = totalElevators;
      // })
};

// jQuery("#elevator-amount-output").change(function() {
//   serviceCalc();
// });

function serviceCalc() {
  if (document.getElementById('standard').checked == true) {
    standard();
  } else if (document.getElementById('premium').checked == true) {
    premium();
  } else if (document.getElementById('excelium').checked == true) {
    excelium();
  } let clear = function() {
    document.getElementById("elevator-services").reset;
  }
};

  document.querySelectorAll('input[name="quoteInputs"]').forEach((el) => {
    el.addEventListener("change", function() {
      serviceCalc()
      // document.getElementById('installation-fees-output').value = parseFloat(unitPrice).toLocaleString("en-US",
      // {
      //   style: "currency",
      //   currency: "USD",
      //   minimumFractionDigits: 2,
      // });
      // document.getElementById('elevator-total-amount-output');
      // document.getElementById('final-price-output');
    });
  });

// function resetServices() {
//   var clear= function(){
//   document.getElementById("myForm").reset
// }

// if (document.getElementById('elevator-amount-output')) {
//
// }

// if (document.getElementById('elevator-amount-output').value) {
//   document.querySelectorAll('input[name="services"]').addEventListener("change", function(event) {
//       var item = event.target.value;
//       console.log(item);
//     };
//   });

// function serviceRealTime (e) {
//   let elevatorAmt = document.getElementById('elevator-amount-output');
//   let resultsForm = document.getElementById('results-form');
//   if (elevatorAmt.value != null)
//   resultsForm.addEventListener('change', () => {
//     resultsForm.classList.on.??
//   });
// }

// function serviceRealTime() {
//   let servicesInput = document.querySelector('input[name="prices"]');
//   document.getElementById('elevator-amount-output').value.addEventListener("change", function() {
//     this.servicesInput.value = true;
//   });
// };

// let priceOutputs = document.querySelector('input[name="prices"]');
// for (i = 0; i < priceOutputs.length; i++ ) {
//
// }

// class priceChange {
//   constructor(elevTotal, install, final) {
//     this.document.getElementById('elevator-total-amount-output').value = elevTotal;
//     this.document.getElementById('installation-fees-output').value = install;
//     this.document.getElementById('final-price-output').value = final;
//   }
// };

// document.getElementById('elevator-amount-output')

// function serviceState() {
//   const firstOutput = document.getElementById('elevator-amount-output');
//   for (var i = 0; i < firstOutput.length; i++) {
//   firstOutput[i].addEventListener('change', function() {
//     if (document.getElementById('standard').checked == true) {
//       standard();
//     } else if (document.getElementById('premium').checked == true) {
//       premium();
//     } else if (document.getElementById('excelium').checked == true) {
//       excelium();
//     }
//   })
//   }
// };

function standard() {
  let elevatorAmt = document.getElementById('elevator-amount-output');
  let unitPrice = 7565;
  let installFee = (unitPrice * .10) * elevatorAmt.value;
  let elevatorTotal = unitPrice * elevatorAmt.value;
  let finalPrice = elevatorTotal + installFee;
  document.getElementById('elevator-unit-price-output').value = parseFloat(unitPrice).toLocaleString("en-US",
  {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });
  document.getElementById('installation-fees-output').value = parseFloat(installFee).toLocaleString("en-US",
  {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });
  document.getElementById('elevator-total-amount-output').value = parseFloat(elevatorTotal).toLocaleString("en-US",
  {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });
  document.getElementById('final-price-output').value = parseFloat(finalPrice).toLocaleString("en-US",
  {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });
};

function premium() {
  let elevatorAmt = document.getElementById('elevator-amount-output');
  let unitPrice = 12345;
  let installFee = (unitPrice * .13) * elevatorAmt.value;
  let elevatorTotal = unitPrice * elevatorAmt.value;
  let finalPrice = elevatorTotal + installFee;
  document.getElementById('elevator-unit-price-output').value = parseFloat(unitPrice).toLocaleString("en-US",
  {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });
  document.getElementById('installation-fees-output').value = parseFloat(installFee).toLocaleString("en-US",
  {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });
  document.getElementById('elevator-total-amount-output').value = parseFloat(elevatorTotal).toLocaleString("en-US",
  {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });
  document.getElementById('final-price-output').value = parseFloat(finalPrice).toLocaleString("en-US",
  {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });
};

function excelium() {
  let elevatorAmt = document.getElementById('elevator-amount-output');
  let unitPrice = 15400;
  let installFee = (unitPrice * .16) * elevatorAmt.value;
  let elevatorTotal = unitPrice * elevatorAmt.value;
  let finalPrice = elevatorTotal + installFee;
  document.getElementById('elevator-unit-price-output').value = parseFloat(unitPrice).toLocaleString("en-US",
  {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });
  document.getElementById('installation-fees-output').value = parseFloat(installFee).toLocaleString("en-US",
  {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });
  document.getElementById('elevator-total-amount-output').value = parseFloat(elevatorTotal).toLocaleString("en-US",
  {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });
  document.getElementById('final-price-output').value = parseFloat(finalPrice).toLocaleString("en-US",
  {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });
};

function showFields() {
  let selection = document.getElementById("building-type");
  // console.dir(selection);
  if (selection.value == "residential") {
    document.getElementById("number-of-apartments").style.display = "block";
    document.getElementById("number-of-floors").style.display = "block";
    document.getElementById("number-of-basements").style.display = "block";
    document.getElementById("number-of-companies").style.display = "none";
    document.getElementById("number-of-parking-spots").style.display = "none";
    document.getElementById("maximum-occupancy").style.display = "none";
    document.getElementById("business-hours").style.display = "none";
    document.getElementById("number-of-corporations").style.display = "none";
    document.getElementById("number-of-elevators").style.display = "none";
  } else if (selection.value == "commercial") {
    document.getElementById("number-of-floors").style.display = "block";
    document.getElementById("number-of-basements").style.display = "block";
    document.getElementById("number-of-companies").style.display = "block";
    document.getElementById("number-of-parking-spots").style.display = "block";
    document.getElementById("number-of-elevators").style.display = "block";
    document.getElementById("maximum-occupancy").style.display = "none";
    document.getElementById("business-hours").style.display = "none";
    document.getElementById("number-of-apartments").style.display = "none";
    document.getElementById("number-of-corporations").style.display = "none";
  } else if (selection.value == "corporate") {
    document.getElementById("number-of-floors").style.display = "block";
    document.getElementById("number-of-basements").style.display = "block";
    document.getElementById("number-of-corporations").style.display = "block";
    document.getElementById("number-of-parking-spots").style.display = "block";
    document.getElementById("maximum-occupancy").style.display = "block";
    document.getElementById("number-of-companies").style.display = "none";
    document.getElementById("business-hours").style.display = "none";
    document.getElementById("number-of-apartments").style.display = "none";
    document.getElementById("number-of-elevators").style.display = "none";
  } else if (selection.value == "hybrid") {
    document.getElementById("number-of-floors").style.display = "block";
    document.getElementById("number-of-basements").style.display = "block";
    document.getElementById("number-of-companies").style.display = "block";
    document.getElementById("number-of-parking-spots").style.display = "block";
    document.getElementById("maximum-occupancy").style.display = "block";
    document.getElementById("business-hours").style.display = "block";
    document.getElementById("number-of-apartments").style.display = "none";
    document.getElementById("number-of-corporations").style.display = "none";
    document.getElementById("number-of-elevators").style.display = "none";
  } else if (selection.value == "") {
    document.getElementById('building-type').reset;
  }
};
//SHOW FIELDS VARIATIONS
// function showFields(id) {
//   let res = document.getElementById("residential-service");
//   let com = document.getElementById("commercial-service");
//   let cor = document.getElementById("corporate-service");
//   let hyb = document.getElementById("hybrid-service");
//     if (res.style.display == "none") {
//       res.style.display = "block";
//     } else if (com.style.display == "none") {
//       com.style.display = "block";
//     } else if (cor.style.display == "none") {
//       cor.style.display = "block";
//     } else if (hyb.style.display == "none") {
//       hyb.style.display = "block";
//     } else {
//       res.style.display = "none";
//       com.style.display = "none";
//       cor.style.display = "none";
//       hyb.style.display = "none";
//     }
// };
//
// function showFields() {
//   let res = document.getElementById("residential-service");
//   let com = document.getElementById("commercial-service");
//   let cor = document.getElementById("corporate-service");
//   let hyb = document.getElementById("hybrid-service");
//     if (selection == "residential") {
//       document.getElementById("residential-service").style.display = "block";
//     } else if (selection.value == "commercial") {
//       com.style.display = "block";
//     } else if (selection.value == "corporate") {
//       cor.style.display = "block";
//     } else if (selection.value == "hybrid-service") {
//       hyb.style.display = "block";
//     }
// };

//
// function showFields() {
// const selection = document.getElementById('building-type').value;
// const residential = document.getElementById('residential-service');
// const commercial = document.getElementById('commercial-service');
// const corporate = document.getElementById('corporate-service');
// const hybrid = document.getElementById('hybrid-service');
// switch (selection) {
//   case selection === "residential":
//     residential.style.display = "block";
//     break;
//   case selection === "commercial":
//     commercial.style.display = "block";
//     break;
//   case selection ==== "corporate":
//     corporate.style.display = "block";
//     break;
//   case selection === "hybrid":
//     hybrid.style.display = "block";
//     break;
//   // default:
//   //   residential.style.display = "none";
//   //   commercial.style.display = "none";
//   //   corporate.style.display = "none";
//   //   hybrid.style.display = "none";
//   }
// };

//
// console.log(showFields(re))

// function showFields(id) {
//   let res = document.getElementById("residential-service");
//   let com = document.getElementById("commercial-service");
//   let cor = document.getElementById("corporate-service");
//   let hyb = document.getElementById("hybrid-service");
//     if (res.style.display === "none") {
//       res.style.display = "block";
//     } else {
//       res.style.display = "none"
//       com.style.display = "none";
//       cor.style.display = "none";
//       hyb.style.display = "none";
//     }
// };

// function showFields(id) {
//   if (id == "residential") {
//       document.getElementByID("residential-service").style.display="none";
//   } else if (id == "commercial") {
//       document.getElementByID("commercial-service").style.display="block";
//   } else if (id == "corporate") {
//       document.getElementByID("commercial-service").style.display="block";
//   } else if (id == "hybrid") {
//       document.getElementByID("commercial-service").style.display="block";
//   }
// };

//OTHER CODE
//services calc
// const serviceType = document.getElementById('service-type').value;
// const elevatorUnitPrice = document.getElementById('elevator-unit-price');
// const installationFees = document.getElementById('installation-fees');
// const elevatorTotalAmt = document.getElementById('elevator-total-amount');
// const finalPriceAmt = document.getElementById('final-price');

// function serviceCalc() {
//   console.log(serviceType);
//   if (serviceType === "standard") {
//     standard();
//   } else if (serviceType === "premium") {
//     premium();
//   } else if (serviceType === "excelium") {
//     excelium();
//   }
// };

// let selectedValue = document.querySelector('input[name="services"]:checked');
// let stdSelected = document.getElementById('standard').checked;
// let premSelected = document.getElementById('premium').checked;
// let execSelected = document.getElementById('excelium').checked;
// function serviceCalc() {
//   if (stdSelected != null) {
//     standard();
//   console.log(stdSelected);
//   } else if (premSelected != null) {
//     premium();
//   console.log(premSelected);
//   } else if (execSelected != null) {
//     excelium();
//   console.log(execSelected);
//   }
// };

// const resApartments = document.getElementByID("residential-service").getElementByID("number-of-apartments")
// form.addEventListener('change', function(e) {
//     elevatorAmt.value = this.return.value;

// //read-only input fields
// function onLoadBody() {
//       // document.getElementById('elevator-amount').readOnly = true;
//       document.getElementById('elevator-amount').setAttribute("readonly", "true");
//       document.getElementById('elevator-unit-price').setAttribute("readonly", "true");
//       document.getElementById('elevator-total-amount').setAttribute("readonly", "true");
//       document.getElementById('installation-fees').setAttribute("readonly", "true");
//       document.getElementById('final-price').setAttribute("readonly", "true");
//     }


//     input1.addEventListener('change', function() {
//         input2.value = input1.value;
// };
//

//   document.getElementByID
//
//
//   let residential = document.getElementByID("bulding type");
//   if (residential == true) {
//
//   }
// }

// return form.innerHTML('change', function(e) {
//   document.getElementById('elevator-amount').innerHTML = shafts;
// })

// elevatorAmt.value.innerHTML = liftCages;
// elevators.value = document.getElementById('elevator-amount-input').innerHTML;
// return form.innerHTML('change', function(e) {
//   document.getElementById('elevator-amount').innerHTML = liftCages;
// })
// document.getElementById('number-of-elevators').addEventListener("keyup", commercial());
// var inputBox = document.getElementById('input');
// function myFunction(){
// document.getElementById('elevator-amount').value = elevators.liftCages;
// }

// document.getElementById('final-price-output').value = "$" + Math.round((finalPrice * (10 ^ 2)) / (10 ^ 2)).toFixed(2);

// document.getElementById('elevator-unit-price-output').value = "$" + parseFloat(unitPrice).toFixed(2);
// document.getElementById('installation-fees-output').value = "$" + parseFloat(installFee).toFixed(2)
// document.getElementById('elevator-total-amount-output').value = "$" + parseFloat(elevatorTotal).toFixed(2);


    // document.getElementById('final-price-output').value = "$" + Math.ceil((finalPrice * (10 ^ 2)) / (10 ^ 2)).toFixed(2);
    // document.getElementById('elevator-unit-price-output').value = "$" + parseFloat(unitPrice);
    // document.getElementById('installation-fees-output').value = "$" + parseFloat(installFee.toString()).toFixed(2);
