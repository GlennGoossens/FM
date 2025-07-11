"use client";

import { useState, FormEvent } from "react";

interface FormData {
  name: string;
  firstname: string;
  email: string;
  phone: string;
  interesse: string;
  days: {
    maandag: boolean;
    dinsdag: boolean;
    woensdag: boolean;
    donderdag: boolean;
    vrijdag: boolean;
    zaterdag: boolean;
  };
  times: {
    ochtend: boolean;
    voormiddag: boolean;
    middag: boolean;
    namiddag: boolean;
    vooravond: boolean;
    avond: boolean;
  };
  doel: string;
  message: string;
  privacy: boolean;
}

export default function BookASessionComponent() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    firstname: "",
    email: "",
    phone: "",
    interesse: "",
    days: {
      maandag: false,
      dinsdag: false,
      woensdag: false,
      donderdag: false,
      vrijdag: false,
      zaterdag: false,
    },
    times: {
      ochtend: false,
      voormiddag: false,
      middag: false,
      namiddag: false,
      vooravond: false,
      avond: false,
    },
    doel: "",
    message: "",
    privacy: false,
  });

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleDayChange = (day: keyof FormData['days']) => {
    setFormData(prev => ({
      ...prev,
      days: {
        ...prev.days,
        [day]: !prev.days[day]
      }
    }));
  };

  const handleTimeChange = (time: keyof FormData['times']) => {
    setFormData(prev => ({
      ...prev,
      times: {
        ...prev.times,
        [time]: !prev.times[time]
      }
    }));
  };

  const handlePrivacyChange = () => {
    setFormData(prev => ({
      ...prev,
      privacy: !prev.privacy
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    // Convert form data to the format expected by the PHP backend
    const formDataToSend = new FormData();
    
    // Add basic fields
    formDataToSend.append('name', formData.name);
    formDataToSend.append('firstname', formData.firstname);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('phone', formData.phone);
    formDataToSend.append('interesse', formData.interesse);
    formDataToSend.append('doel', formData.doel);
    formDataToSend.append('message', formData.message);
    
    // Add selected days
    Object.entries(formData.days).forEach(([day, checked]) => {
      if (checked) {
        formDataToSend.append(day, day);
      }
    });
    
    // Add selected times
    Object.entries(formData.times).forEach(([time, checked]) => {
      if (checked) {
        formDataToSend.append(time, time);
      }
    });
    
    // Add privacy checkbox
    if (formData.privacy) {
      formDataToSend.append('privacy', 'privacy');
    }
    
    // Submit the form
    //TODO: change this to correct backend endpoint with mail functionality
    // change this to a nodemailer implementation
    fetch('forms/book.php', {
      method: 'POST',
      body: formDataToSend
    })
    .then(response => response.text())
    .then(data => {
      console.log('Success:', data);
      // Handle success (show success message, reset form, etc.)
    })
    .catch(error => {
      console.error('Error:', error);
      // Handle error
    });
  };

  return (
    <section id="book-a-session" className="book-a-table">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Try-out training</h2>
          <p>Boek een gratis try-out training</p>
        </div>

        <div className="row">
          <div className="col-12">
            <p>Kom snel langs voor een gratis proefles en we bekijken samen hoe jij je doel kan bereiken.</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="php-email-form">
          <div className="row">
            <div className="col-lg-6 col-md-6 form-group">
              <input 
                type="text" 
                name="name" 
                className="form-control" 
                id="name" 
                placeholder="Naam" 
                data-rule="minlen:4"
                data-msg="Please enter at least 4 chars" 
                required 
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
              />
              <div className="validate"></div>
            </div>
            <div className="col-lg-6 col-md-6 form-group">
              <input 
                type="text" 
                name="firstname" 
                className="form-control" 
                id="firstname" 
                placeholder="Voornaam"
                data-rule="minlen:4" 
                data-msg="Please enter at least 4 chars" 
                required
                value={formData.firstname}
                onChange={(e) => handleInputChange('firstname', e.target.value)}
              />
              <div className="validate"></div>
            </div>
            <div className="col-lg-6 col-md-6 form-group mt-3 mt-md-0">
              <input 
                type="email" 
                className="form-control" 
                name="email" 
                id="email" 
                placeholder="Email" 
                data-rule="email"
                data-msg="Please enter a valid email" 
                required
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
              />
              <div className="validate"></div>
            </div>
            <div className="col-lg-6 col-md-6 form-group mt-3 mt-md-0">
              <input 
                type="text" 
                className="form-control" 
                name="phone" 
                id="phone" 
                placeholder="Telefoon"
                data-rule="minlen:4" 
                data-msg="Please enter at least 4 chars" 
                required
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
              />
              <div className="validate"></div>
            </div>
            
            <div className="col-12 form-group mt-3">
              <label className="select-label">Waarin ben je het meest geïnteresseerd?</label>
                <select 
                  name="interesse" 
                  className="form-select" 
                  id="interesse" 
                  required
                  value={formData.interesse}
                  onChange={(e) => handleInputChange('interesse', e.target.value)}
                >
                  <option value=""></option>
                  <option value="1 op 1 Personal Training">een-op-een Personal Training</option>
                  <option value="Small Group Training">Small Group Training</option>
                  <option value="Group Training">Group Training</option>
                  <option value="Trainingschema">Trainingschema</option>
                </select>
                <div className="validate"></div>
            </div>
            <div className="col-12 form-group mt-3">
              <label className="select-label">Op welke dagen kan jij je vrijmaken?</label>
              <div className="form-check">
                <input 
                  className="form-check-input" 
                  name="maandag" 
                  type="checkbox" 
                  value="maandag" 
                  id="maandag"
                  checked={formData.days.maandag}
                  onChange={() => handleDayChange('maandag')}
                />
                <label className="form-check-label" htmlFor="maandag">
                  Maandag
                </label>
              </div>
              <div className="form-check">
                <input 
                  className="form-check-input" 
                  name="dinsdag" 
                  type="checkbox" 
                  value="dinsdag" 
                  id="dinsdag"
                  checked={formData.days.dinsdag}
                  onChange={() => handleDayChange('dinsdag')}
                />
                <label className="form-check-label" htmlFor="dinsdag">
                  Dinsdag
                </label>
              </div>
              <div className="form-check">
                <input 
                  className="form-check-input" 
                  name="woensdag" 
                  type="checkbox" 
                  value="woensdag" 
                  id="woensdag"
                  checked={formData.days.woensdag}
                  onChange={() => handleDayChange('woensdag')}
                />
                <label className="form-check-label" htmlFor="woensdag">
                  Woensdag
                </label>
              </div>
              <div className="form-check">
                <input 
                  className="form-check-input" 
                  type="checkbox" 
                  name="donderdag" 
                  value="donderdag" 
                  id="donderdag"
                  checked={formData.days.donderdag}
                  onChange={() => handleDayChange('donderdag')}
                />
                <label className="form-check-label" htmlFor="donderdag">
                  Donderdag
                </label>
              </div>
              <div className="form-check">
                <input 
                  className="form-check-input" 
                  type="checkbox" 
                  value="vrijdag" 
                  name="vrijdag" 
                  id="vrijdag"
                  checked={formData.days.vrijdag}
                  onChange={() => handleDayChange('vrijdag')}
                />
                <label className="form-check-label" htmlFor="vrijdag">
                  Vrijdag
                </label>
              </div>
              <div className="form-check">
                <input 
                  className="form-check-input" 
                  type="checkbox" 
                  value="zaterdag" 
                  id="zaterdag" 
                  name="zaterdag"
                  checked={formData.days.zaterdag}
                  onChange={() => handleDayChange('zaterdag')}
                />
                <label className="form-check-label" htmlFor="zaterdag">
                  Zaterdag
                </label>
              </div>
              <div className="validate"></div>
            </div>
            <div className="col-12 form-group mt-3">
              <label className="select-label">Op welk(e) moment(en) van de dag kan jij je vrijmaken?</label>
              <div className="form-check">
                <input 
                  className="form-check-input" 
                  type="checkbox" 
                  name="ochtend" 
                  value="ochtend" 
                  id="ochtend"
                  checked={formData.times.ochtend}
                  onChange={() => handleTimeChange('ochtend')}
                />
                <label className="form-check-label" htmlFor="ochtend">
                  Ochtend
                </label>
              </div>
              <div className="form-check">
                <input 
                  className="form-check-input" 
                  type="checkbox" 
                  value="voormiddag" 
                  name="voormiddag" 
                  id="voormiddag"
                  checked={formData.times.voormiddag}
                  onChange={() => handleTimeChange('voormiddag')}
                />
                <label className="form-check-label" htmlFor="voormiddag">
                  Voormiddag
                </label>
              </div>
              <div className="form-check">
                <input 
                  className="form-check-input" 
                  type="checkbox" 
                  value="middag" 
                  id="middag" 
                  name="middag"
                  checked={formData.times.middag}
                  onChange={() => handleTimeChange('middag')}
                />
                <label className="form-check-label" htmlFor="middag">
                  Middag
                </label>
              </div>
              <div className="form-check">
                <input 
                  className="form-check-input" 
                  type="checkbox" 
                  value="namiddag" 
                  id="namiddag" 
                  name="namiddag"
                  checked={formData.times.namiddag}
                  onChange={() => handleTimeChange('namiddag')}
                />
                <label className="form-check-label" htmlFor="namiddag">
                  Namiddag
                </label>
              </div>
              <div className="form-check">
                <input 
                  className="form-check-input" 
                  type="checkbox" 
                  value="vooravond" 
                  id="vooravond" 
                  name="vooravond"
                  checked={formData.times.vooravond}
                  onChange={() => handleTimeChange('vooravond')}
                />
                <label className="form-check-label" htmlFor="vooravond">
                  Vooravond
                </label>
              </div>
              <div className="form-check">
                <input 
                  className="form-check-input" 
                  type="checkbox" 
                  value="avond" 
                  id="avond" 
                  name="avond"
                  checked={formData.times.avond}
                  onChange={() => handleTimeChange('avond')}
                />
                <label className="form-check-label" htmlFor="avond">
                  Avond
                </label>
              </div>
              <div className="validate"></div>
            </div>
          </div>
          <div className="form-group mt-3">
            <textarea 
              className="form-control" 
              name="doel" 
              rows={3}
              placeholder="Aan welk doel wil je graag werken tijdens de training?"
              value={formData.doel}
              onChange={(e) => handleInputChange('doel', e.target.value)}
            ></textarea>
            <div className="validate"></div>
          </div>
          <div className="form-group mt-3">
            <textarea 
              className="form-control" 
              name="message" 
              rows={3} 
              placeholder="Andere relevante info"
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
            ></textarea>
            <div className="validate"></div>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value="privacy"
              id="privacy"
              name="privacy"
              required
              checked={formData.privacy}
              onChange={handlePrivacyChange}
            />
            <label className="form-check-label" htmlFor="privacy">
              Jouw gegevens worden uitsluitend gebruikt voor het beantwoorden van uw aanvraag.
            </label>
          </div>
          <div className="mb-3">
            <div className="loading">Loading</div>
            <div className="error-message"></div>
            <div className="sent-message">Your booking request was sent. Thank you!</div>
          </div>
          <div className="text-center">
            <button type="submit">BOEK NU MIJN GRATIS PROEFLES</button>
          </div>
        </form>

      </div>
    </section>
  );
}