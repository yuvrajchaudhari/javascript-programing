 class Vehicle {
    // Data members
    // constructor
    constructor(vehicleName, companyName, typeOfVehicle, engineCc, color, price){
        this.vehicleName = vehicleName;
        this.companyName = companyName;
        this.typeOfVehicle = typeOfVehicle;
        this.engineCc = engineCc;
        this.color = color;
        this.price = price;
    }
    // Member Functions
    display(){
        console.table(`Vehicle Name: ${this.vehicleName}, CompanyName: ${this.companyName}, Type Of Vehicle: ${this.typeOfVehicle}, EngineCc: ${this.engineCc}, Color: ${this.color}, Price:${this.price} `);   
    }
}
const vehicleHonda = new Vehicle("Unicorn", "Honda", "Two wheeler", "160cc", "BlackRed", "18000" );
vehicleHonda.display();

const vehicleTata = new Vehicle("Curvv", "TATA", "Four wheeler", "3000cc", "Silver", "2400000" );
vehicleTata.display();

const vehicleKia = new Vehicle("Karen", "Kia", "Four wheeler", "2500cc", "Blue", "2000000" );
vehicleKia.display();

const vehicleRenault = new Vehicle("Duster", "Renoult", "Four wheeler", "1500cc", "Maroom", "1200000" );
vehicleRenault.display();

const vehicleTvs = new Vehicle("Jupiter", "TVS", "Two wheeler", "125cc", "Pink", "120000" );
vehicleTvs.display();



console.log('=======================college Information===================')
class College {
    constructor(collegeName,  city, intake, since, branches){
        this.collegeName = collegeName;
        this.city = city;
        this.intake = intake;
        this.since = since;
    }
    // Member Functions
    display(){
        console.table(`College Name: ${this.collegeName}, city: ${this.city}, intake: ${this.intake}, since: ${this.since} `);   
    }
}

const coep = new College("COEP", "Pune", "500", "1919");
coep.display();

const SSGB = new College("SSGB", "Jalgaon", "300", "1947");
SSGB.display();

const bamu = new College("BAMU", "Sambhajinagar", "800", "1997");
bamu.display();


const Sanjivani = new College("Sanjivani coe", "sangamner", "200", "2002");
Sanjivani.display();