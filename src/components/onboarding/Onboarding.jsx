import "./Onboarding.css"

import React, { useEffect, useState } from 'react'

const createSelectedOptionsString = (selectedOptions) => {
    const selectedOptionMessage = Object.keys(selectedOptions)
    .filter(key => selectedOptions[key])
    .join(', ').replace(/_/g, ' ');
    const modifiedQuestion = "What is instana? What are the steps for " + selectedOptionMessage + "?";
    return modifiedQuestion;
  };

const Onboarding = ({setMessage}) => {
    const [selectedOptions, setSelectedOptions] = useState({
        agent_deployment: false,
        application_perspective: false,
        website_and_mobile_app_monitoring: false,
        custom_dashboards: false,
        synthetic_monitoring: false
    });

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setSelectedOptions({
            ...selectedOptions,
            [name]: checked
        });
    };

    useEffect(() => {
        setMessage(createSelectedOptionsString(selectedOptions))
    }, [selectedOptions])

  return (
    <div className='questionaire'>
        <h5>
            Hi! Welcome to Instana. I will help you onboard to Instana. Please select one of the goals from the list below:
        </h5>

        <div className="checkbox-container">
            <div>
                <input 
                    type="checkbox" 
                    id="agent_deployment" 
                    name="agent_deployment" 
                    value="Agent deployment" 
                    checked={selectedOptions.agent_deployment} 
                    onChange={handleCheckboxChange} 
                />
                <label htmlFor="agent_deployment">Agent deployment</label>
            </div>
            <div>
                <input 
                    type="checkbox" 
                    id="application_perspective" 
                    name="application_perspective" 
                    value="Application perspective" 
                    checked={selectedOptions.application_perspective} 
                    onChange={handleCheckboxChange} 
                />
                <label htmlFor="application_perspective">Application perspective</label>
            </div>
            <div>
                <input 
                    type="checkbox" 
                    id="website_and_mobile_app_monitoring" 
                    name="website_and_mobile_app_monitoring" 
                    value="Website and Mobile App monitoring" 
                    checked={selectedOptions.website_and_mobile_app_monitoring} 
                    onChange={handleCheckboxChange} 
                />
                <label htmlFor="website_and_mobile_app_monitoring">Website and Mobile App monitoring</label>
            </div>
            <div>
                <input 
                    type="checkbox" 
                    id="custom_dashboards" 
                    name="custom_dashboards" 
                    value="Custom Dashboards" 
                    checked={selectedOptions.custom_dashboards} 
                    onChange={handleCheckboxChange} 
                />
                <label htmlFor="custom_dashboards">Custom Dashboards</label>
            </div>
            <div>
                <input 
                    type="checkbox" 
                    id="synthetic_monitoring" 
                    name="synthetic_monitoring" 
                    value="Synthetic monitoring" 
                    checked={selectedOptions.synthetic_monitoring} 
                    onChange={handleCheckboxChange} 
                />
                <label htmlFor="synthetic_monitoring">Synthetic monitoring</label>
            </div>
        </div>
        
    </div>
  )
}

export default Onboarding