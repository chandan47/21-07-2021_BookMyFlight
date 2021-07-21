export class BookFlight{
    name?:string;
    emailID?:string;
    noOfSeatsToBook?:number ;
    mealType?:string;
    seatNumber?:number;
    discountcode?:string;
    triptype?: string;
    fromPlace?:string;
    toPlace?:string;
    startdatetime?:string;

    constructor(public Name?:string, 
        public emailid?:string, 
        public NoOfSeatsToBook?:number,
        public MealType?:string,
        public SeatNumber?:number,
        public Discountcode?:string,
        public TripType?:string,
        public FromPlace?:string,
        public ToPlace?:string,
        public Startdatetime?:string

       ){
        this.name=Name,
        this.emailID=emailid,
        this.noOfSeatsToBook=NoOfSeatsToBook,
        this.mealType=MealType,
        this.seatNumber=SeatNumber,
        this.discountcode=Discountcode,
        this.triptype=TripType,
        this.fromPlace=FromPlace,
        this.ToPlace=ToPlace,
        this.startdatetime=Startdatetime


    }
}