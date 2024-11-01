import PriceOption from "../proceOption/PriceOption";

const PriceOptions = () => {
    const pricrOption =[
        {
          "id": 1,
          "name": "Basic Plan",
          "price": 29.99,
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "Open gym hours only"
          ]
        },
        {
          "id": 2,
          "name": "Standard Plan",
          "price": 49.99,
          "features": [
            "Access to gym equipment",
            "Locker room access",
            "Open gym hours",
            "One group class per week",
            "Access to sauna"
          ]
        },
        {
          "id": 3,
          "name": "Premium Plan",
          "price": 69.99,
          "features": [
            "24/7 gym access",
            "Access to gym equipment",
            "Locker room and showers",
            "Unlimited group classes",
            "Access to sauna and pool",
            "1 free personal training session per month"
          ]
        },
        {
          "id": 4,
          "name": "Family Plan",
          "price": 99.99,
          "features": [
            "24/7 gym access for up to 4 family members",
            "Access to gym equipment",
            "Locker room and showers",
            "Unlimited group classes",
            "Access to sauna, pool, and kids' area",
            "2 free personal training sessions per month"
          ]
        },
        {
          "id": 5,
          "name": "VIP Plan",
          "price": 149.99,
          "features": [
            "24/7 VIP gym access",
            "Access to exclusive VIP area and equipment",
            "Priority locker room and private showers",
            "Unlimited group and premium classes",
            "Access to sauna, pool, steam room, and spa",
            "Weekly personal training sessions",
            "Free guest passes (up to 2 per month)"
          ]
        }
      ]
      
    return (
        <div className="w-10/12 mx-auto">
          <h1 className="text-2xl md:text-5xl my-6">Best price in the town</h1>
            <div className="grid md:grid-cols-3 gap-8 ">
            {
              pricrOption.map((option) => <PriceOption key={option.id}
              option={option}
              ></PriceOption>)
            }
            </div>
        </div>
    );
};

export default PriceOptions;