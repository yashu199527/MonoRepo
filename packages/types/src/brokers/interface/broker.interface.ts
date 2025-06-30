import { CreateBrokerRequest } from "../dto/create-broker.request"; 

export interface Broker extends CreateBrokerRequest {
    id: string;
  name: string;
  commission: string;
    
}