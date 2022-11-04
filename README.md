# Challange-07 (Binar Rental Cars)


## description

this challenge uses react(CRA), there are 2 different pages, the first page `http://localhost:3000/` to display the landing page and the second page `http://localhost:3000/cars` to display the car search page which functions to filter cars based on `availableAt` and `capacity`



## List Cars Endpoint

 | Method |  Full URL |
| ------ | ------ |
| GET | https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json |

```typescript
interface Car {
  id: string;
  plate: string;
  manufacture: string;
  model: string;
  image: string;
  rentPerDay: number;
  capacity: number;
  description: string;
  availableAt:datetime;
  transmission: string;
  available: boolean;
  type: string;
  year: string;
  options: Array<string>;
  specs: Array<string>;
}

```
---

## Steps to run
1. clone the repositories
  ```
  git clone https://github.com/Arbyusman/challange-07.git
  ```
2. install the dependencies
  ```
  yarn install
  ```
3. run  server
  ```
  - yarn start
  - server listening on http://localhost:3000
  ```
