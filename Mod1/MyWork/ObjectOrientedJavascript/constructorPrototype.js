/* Script to exercise javascript constructor
 * Author: HartCode programmer
 * Date: 08/27/2019
 */

let policies = [
    new Policy("0101P", "DANA", "Auto", new Date(1995, 5, 1), new Date(2019, 07, 27), 1200),
    new Policy("0105P", "VANA", "Home", new Date(2018, 5, 1), new Date(2019, 07, 27), 600),
    new Policy("0110P", "SARA", "Auto", new Date(2018, 5, 1), new Date(2019, 07, 27), 1300),
    new Policy("0115P", "MIKE", "Home", new Date(2010, 5, 1), new Date(2021, 01, 01), 900),
    new Policy("0120P", "STEVE", "Auto", new Date(2015, 5, 1), new Date(2019, 10, 05), 1500),
    new Policy("0125P", "RAY", "Home", new Date(2015, 5, 1), new Date(2019, 11, 10), 400)
];

for (let i = 0; i < policies.length; i++) {
    policies[i].display();
    let setRenew = function() {
        let renlDateTime = policies[i].policyRenlDate.getTime();
        let todayDateTime = new Date();
        todayDateTime.setHours(0, 0, 0, 0);
        todayTime = todayDateTime.getTime();
        if (renlDateTime == todayTime) {
            if (policies[i].policyType == "Home") {
                premiumChangePct = 3;
            } else {
                let threshold3Year = 3 * 1000 * 60 * 60 * 24 * 365
                let origIssueDateTime = policies[i].OrigIssueDate.getTime();
                let diff = todayDateTime - threshold3Year;
                console.log(diff);
                if (origIssueDateTime > diff) {
                    premiumChangePct = 5;
                } else {
                    premiumChangePct = 3;
                }
            }
            policies[i].renew(premiumChangePct);
        }
    }
    setRenew();
    policies[i].display();
}



//Constructor function (Pascal case used as naming convention to represent constructor function)
function Policy(polNo, polHolder, polType, OrigIssDate, polRenlDate, polPrem) {
    this.policyNo = polNo;
    this.policyHolder = polHolder;
    this.policyType = polType;
    this.OrigIssueDate = OrigIssDate;
    this.policyRenlDate = polRenlDate;
    this.policyPrem = polPrem;
}

//Prototype inherits the properties and method of base constructor without creating copy of method
// for each object creation

Policy.prototype.display = function() {
    console.log(`Policy Number: ${this.policyNo} \t Policy Holder: ${this.policyHolder} \t` +
        `PolicyType : ${this.policyType} \t Original Issue Date: ${this.OrigIssueDate} \t` +
        `Policy Renewal Date: ${this.policyRenlDate} \t Policy Premium: ${this.policyPrem}`);
};

Policy.prototype.renew = function() {
    console.log("calculate renewal premium");
    this.policyPrem = this.policyPrem + ((premiumChangePct / 100) * this.policyPrem);
    let oneYearSeconds = 1000 * 60 * 60 * 24 * 365;
    console.log(new Date(1569588336000));
    console.log(` current policy renewal date: ${this.policyRenlDate.getTime()}`);
    let FuturePolRenlDateTime = this.policyRenlDate.getTime() + oneYearSeconds;
    this.policyRenlDate = new Date(FuturePolRenlDateTime);
};