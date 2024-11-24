import React from 'react';
import { UploadJobDesc, UploadResume } from '../components';

export default function ResumeScreen() {
  const [currentStep, setCurrentStep] = React.useState(0);
  return (
    <main style={styles.main}>
      <div style={styles.currentStep}>
       {/* current step as a button that can be pressed*/}
      </div>
     <div style={styles.stepAction}>

      {
        currentStep === 0 && (
          //resume upload
          <UploadResume/>
        )
      }
         {
        currentStep === 1 && (
          //job description
          <UploadJobDesc/>
        )
      }
         {
        currentStep === 2 && (
          //score
          <div></div>
        )
      }


     </div>
    </main>
  );
}

const styles = {
  main: {
   
  },
};
