"use client"
import {useMultistepForm} from "./(hooks)/useMultistepForm"
const Register = () => {

  const {steps,
    currentStepIndex,
    step,back,
    isFirstStep,
    isLastStep,
    next
  } = useMultistepForm([
    <div>One</div>,
    <div>Two</div>,
    <div>Three</div>
  ])

  return (<>
  <h1>Register Page</h1>
  <div className="relative border-2 border-black p-8 m-4 rounded-md">
    <form>
      <div className="absolute top-2 right-2">
        {currentStepIndex + 1} / {steps.length}
      </div>
      {step}
      <div className=" mt-4 flex gap-2">
        {!isFirstStep &&  <button  type="button" className="bg-blue-300" onClick={back}>back</button>}
        <button type="button" className="bg-red-400" onClick={next}>next</button>
        {isLastStep && <button type="button" className="bg-green-400" onClick={next}>submit</button>}

      </div>
    </form>
  </div>
  </>
  );
};

export default Register;
