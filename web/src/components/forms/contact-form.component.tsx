"use client";

import { useState } from 'react';

export default function ContactFormComponent() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok && result.message) {
                setStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                setStatus('error');
                setErrorMessage(result.error || 'Failed to send message');
            }
        } catch (error) {
            setStatus('error');
            setErrorMessage('Network error. Please try again.');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <form onSubmit={handleSubmit} className="php-email-form">
            <div className="row">
                <div className="col-md-6 form-group">
                    <input 
                        type="text" 
                        name="name" 
                        className="form-control" 
                        id="name" 
                        placeholder="Naam" 
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input 
                        type="email" 
                        className="form-control" 
                        name="email" 
                        id="email" 
                        placeholder="Email" 
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>
            <div className="form-group mt-3">
                <input 
                    type="text" 
                    className="form-control" 
                    name="subject" 
                    id="subject" 
                    placeholder="Onderwerp" 
                    value={formData.subject}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group mt-3">
                <textarea 
                    className="form-control" 
                    name="message" 
                    rows={8} 
                    placeholder="Bericht" 
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="privacy" id="privacy" required/>
                <label className="form-check-label" htmlFor="privacy">
                    Jouw gegevens worden uitsluitend gebruikt voor het beantwoorden van uw aanvraag.
                </label>
            </div>
            <div className="my-3">
                {status === 'loading' && <div className="loading">Loading</div>}
                {status === 'error' && <div className="error-message">{errorMessage}</div>}
                {status === 'success' && <div className="sent-message">Your message has been sent. Thank you!</div>}
            </div>
            <div className="text-center">
                <button type="submit" disabled={status === 'loading'}>
                    {status === 'loading' ? 'Sending...' : 'Verzend'}
                </button>
            </div>
        </form>
    );
}