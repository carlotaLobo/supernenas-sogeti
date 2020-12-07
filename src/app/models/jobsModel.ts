import { JobGradesModel } from './jobGradesModel';

export class JobsModel {
    constructor(
        public label : string,
        public name: string,
        public job_grades: JobGradesModel
    ) {
        
    }
}