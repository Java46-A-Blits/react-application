import {Reducer} from "react"
import {PayloadAction} from "@reduxjs/toolkit"
import { Course } from "../models/Course"
import { ADD_COURSE_ACTION, REMOVE_COURSE_ACTION, UPDATE_COURSE_ACTION } from "./actions"
import { coursesService } from "../config/service-config"


export const coursesReducer: Reducer<Course[], PayloadAction<Course | number>> =
 (courses = [], action): Course[] => {
     switch(action.type) {
         case ADD_COURSE_ACTION: coursesService.add(action.payload as Course); break;
         case REMOVE_COURSE_ACTION: coursesService.remove(action.payload as number); break;
         case UPDATE_COURSE_ACTION: const course: Course = action.payload as Course; 
                                    coursesService.update(course.id, course); break;
         default: return courses                           
     }
    return coursesService.get();
}