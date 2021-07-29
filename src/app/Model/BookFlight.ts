export class BookFlight{id?:number;
    name?:string;
    emailID?:string;
    noOfSeatsToBook?:number ;
    mealType?:string;
    seatNumber?:number;
    discountcode?:string;
    triptype?: string;
    airlineName?:string;
    fromPlace?:string;
    toPlace?:string;
    startdatetime?:string;
    totalPrice?:number;

    constructor( public Id?:number,
        public Name?:string, 
        public emailid?:string, 
        public NoOfSeatsToBook?:number,
        public MealType?:string,
        public SeatNumber?:number,
        public Discountcode?:string,
        public TripType?:string,
        public FromPlace?:string,
        public ToPlace?:string,
        public Startdatetime?:string,
        public AirlineName?:string,
        public TotalPrice?:number
       ){
        this.name=Name,
        this.emailID=emailid,
        this.noOfSeatsToBook=NoOfSeatsToBook,
        this.mealType=MealType,
        this.seatNumber=SeatNumber,
        this.discountcode=Discountcode,
        this.triptype=TripType,
        this.fromPlace=FromPlace,
        this.toPlace=ToPlace,
        this.startdatetime=Startdatetime,
        this.airlineName=AirlineName,
        this.id=Id,
        this.totalPrice=TotalPrice


    }
}