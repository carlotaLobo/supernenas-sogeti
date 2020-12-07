import { IdentityModel } from './identityModel';
import { LicensesModel } from './licensesModel';
import { VehiclesModel } from './vehiclesModel';

export class UserModel{

    constructor(
      
        public identifier:string,
        public identity: IdentityModel,
        public job: string,
        public job_grade: string,
        public licenses: Array< LicensesModel>,
        public bank_money: string,     
        public phone_calls: [],
        public phone_number: string,
        public validated: boolean,
        public house_id: string,
        public vehicles:Array< VehiclesModel>
       ){}
}