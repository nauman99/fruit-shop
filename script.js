let budget = 0,
  appleQuantity = 0,
  applePrice = 1,
  mangoQuantity = 0,
  mangoPrice = 2,
  bananaQuantity = 0,
  bananaPrice = 3,
  bill = 0,
  remainingBudget = budget;

function setBudget() {
  budget = document.getElementById("budget").value;
  alert("Budget is set to " + budget);
  remainingBudget = budget;
  document.getElementById("remainingBudget").innerHTML = remainingBudget;
}

function add(item) {
  if (remainingBudget === 0) {
    alert("Bill has exceeded the Budget");
  } else {
    switch (item) {
      case "apple":
        // increment quantity
        appleQuantity = appleQuantity + 1;
        document.getElementById("appleQuantity").innerHTML = appleQuantity;

        // set bill
        bill =
          appleQuantity * applePrice +
          mangoQuantity * mangoPrice +
          bananaQuantity * bananaPrice;
        document.getElementById("bill").innerHTML = bill;

        //set remaining budget
        remainingBudget = budget - bill;
        document.getElementById("remainingBudget").innerHTML = remainingBudget;

        break;
      case "mango":
        if (mangoPrice > remainingBudget) {
          alert("Bill has exceeded the Budget");
        } else {
          // increment quantity
          mangoQuantity = mangoQuantity + 1;
          document.getElementById("mangoQuantity").innerHTML = mangoQuantity;

          // set bill
          bill =
            appleQuantity * applePrice +
            mangoQuantity * mangoPrice +
            bananaQuantity * bananaPrice;
          document.getElementById("bill").innerHTML = bill;

          //set remaining budget
          remainingBudget = budget - bill;
          document.getElementById(
            "remainingBudget"
          ).innerHTML = remainingBudget;
        }
        break;
      case "banana":
        if (bananaPrice > remainingBudget) {
          alert("Bill has exceeded the Budget");
        } else {
          bananaQuantity = bananaQuantity + 1;
          document.getElementById("bananaQuantity").innerHTML = bananaQuantity;

          // set bill
          bill =
            appleQuantity * applePrice +
            mangoQuantity * mangoPrice +
            bananaQuantity * bananaPrice;
          document.getElementById("bill").innerHTML = bill;

          //set remaining budget
          remainingBudget = budget - bill;
          document.getElementById(
            "remainingBudget"
          ).innerHTML = remainingBudget;
        }
        break;

      default:
        break;
    }
  }
}

function remove(item) {
  if (bill === 0) {
    alert("Bill is 0");
  } else {
    switch (item) {
      case "apple":
        // decrement quantity
        if (appleQuantity != 0) {
          appleQuantity = appleQuantity - 1;
          document.getElementById("appleQuantity").innerHTML = appleQuantity;

          // set bill
          bill =
            appleQuantity * applePrice +
            mangoQuantity * mangoPrice +
            bananaQuantity * bananaPrice;
          document.getElementById("bill").innerHTML = bill;

          //set remaining budget
          remainingBudget = budget - bill;
          document.getElementById(
            "remainingBudget"
          ).innerHTML = remainingBudget;
        }
        break;
      case "mango":
        if (mangoQuantity != 0) {
          // decrement quantity
          mangoQuantity = mangoQuantity - 1;
          document.getElementById("mangoQuantity").innerHTML = mangoQuantity;

          // set bill
          bill =
            appleQuantity * applePrice +
            mangoQuantity * mangoPrice +
            bananaQuantity * bananaPrice;
          document.getElementById("bill").innerHTML = bill;

          //set remaining budget
          remainingBudget = budget - bill;
          document.getElementById(
            "remainingBudget"
          ).innerHTML = remainingBudget;
        }
        break;
      case "banana":
        if (bananaQuantity != 0) {
          // decrement quantity
          bananaQuantity = bananaQuantity - 1;
          document.getElementById("bananaQuantity").innerHTML = bananaQuantity;

          // set bill
          bill =
            appleQuantity * applePrice +
            mangoQuantity * mangoPrice +
            bananaQuantity * bananaPrice;
          document.getElementById("bill").innerHTML = bill;

          //set remaining budget
          remainingBudget = budget - bill;
          document.getElementById(
            "remainingBudget"
          ).innerHTML = remainingBudget;
        }
        break;

      default:
        break;
    }
  }
}
