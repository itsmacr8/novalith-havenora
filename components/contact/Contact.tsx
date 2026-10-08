'use client';

import { useState, SubmitEvent, ChangeEvent } from 'react';
import { ScrollReveal } from '../shared/ScrollReveal';
import { DEFAULT_CONTACT_REASONS, IContactProps } from '@/lib/mock-data';
import { SectionIntro } from '../shared/SectionIntro';

function Contact({
  contactReasons = DEFAULT_CONTACT_REASONS,
  propertyTitle = 'This Property',
}: IContactProps) {
  const [formData, setFormData] = useState({
    reason: '',
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(
    null,
  );

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate API request submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      // Reset form on success if desired, or keep data
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <SectionIntro
        badgeText='Direct Inquiry'
        title='Get in Touch With Our Specialists'
        description={`Have questions about ${propertyTitle}? Fill out the form below and our real estate team will reach out promptly.`}
        icon='✉️'
        align='center'
      />
      <div className='mx-auto max-w-3xl'>
        <ScrollReveal>
          <div className='rounded-3xl border border-(--border-subtle) bg-(--bg-card) p-8 sm:p-12 shadow-sm'>
            {submitStatus === 'success' ? (
              <div className='text-center py-12 space-y-4'>
                <div className='inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600'>
                  ✓
                </div>
                <h3 className='text-h3 font-bold text-(--text-primary)'>
                  Inquiry Sent Successfully!
                </h3>
                <p className='text-small text-(--text-muted) max-w-md mx-auto'>
                  Thank you for reaching out. One of our senior property
                  advisors will review your request and contact you shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitStatus(null);
                    setFormData({
                      reason: '',
                      name: '',
                      phone: '',
                      email: '',
                      message: '',
                    });
                  }}
                  className='mt-4 rounded-xl bg-(--accent) px-6 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-(--accent-hover) transition-colors'
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className='space-y-6'>
                {/* Reason for Contacting (Dropdown - Nothing selected by default) */}
                <div>
                  <label
                    htmlFor='reason'
                    className='block font-bold uppercase tracking-wider text-(--primary) mb-2'
                  >
                    Reason for Contacting{' '}
                    <span className='text-red-500'>*</span>
                  </label>
                  <select
                    id='reason'
                    name='reason'
                    required
                    value={formData.reason}
                    onChange={handleChange}
                    className='w-full rounded-xl border border-(--border-subtle) bg-(--bg-primary) px-4 py-3 text-small font-medium text-(--text-primary) focus:border-(--accent) focus:outline-none focus:ring-2 focus:ring-(--accent)/20 transition-all invalid:text-(--text-muted)'
                  >
                    <option value='' disabled hidden>
                      -- Select your inquiry type --
                    </option>
                    {contactReasons.map((item) => (
                      <option
                        key={item.id}
                        value={item.id}
                        className='text-(--text-primary)'
                      >
                        {item.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Name and Phone Grid */}
                <div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
                  <div>
                    <label
                      htmlFor='name'
                      className='block text-xs font-bold uppercase tracking-wider text-(--text-primary) mb-2'
                    >
                      Full Name <span className='text-red-500'>*</span>
                    </label>
                    <input
                      type='text'
                      id='name'
                      name='name'
                      required
                      placeholder='e.g., John Doe'
                      value={formData.name}
                      onChange={handleChange}
                      className='w-full rounded-xl border border-(--border-subtle) bg-(--bg-primary) px-4 py-3 text-sm font-medium text-(--text-primary) placeholder:text-(--text-muted) focus:border-(--accent) focus:outline-none focus:ring-2 focus:ring-(--accent)/20 transition-all'
                    />
                  </div>

                  <div>
                    <label
                      htmlFor='phone'
                      className='block text-xs font-bold uppercase tracking-wider text-(--text-primary) mb-2'
                    >
                      Phone Number <span className='text-red-500'>*</span>
                    </label>
                    <input
                      type='tel'
                      id='phone'
                      name='phone'
                      required
                      placeholder='e.g., +880 1871 ******'
                      value={formData.phone}
                      onChange={handleChange}
                      className='w-full rounded-xl border border-(--border-subtle) bg-(--bg-primary) px-4 py-3 text-sm font-medium text-(--text-primary) placeholder:text-(--text-muted) focus:border-(--accent) focus:outline-none focus:ring-2 focus:ring-(--accent)/20 transition-all'
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor='email'
                    className='block text-xs font-bold uppercase tracking-wider text-(--text-primary) mb-2'
                  >
                    Email Address <span className='text-red-500'>*</span>
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    required
                    placeholder='e.g., john@example.com'
                    value={formData.email}
                    onChange={handleChange}
                    className='w-full rounded-xl border border-(--border-subtle) bg-(--bg-primary) px-4 py-3 text-sm font-medium text-(--text-primary) placeholder:text-(--text-muted) focus:border-(--accent) focus:outline-none focus:ring-2 focus:ring-(--accent)/20 transition-all'
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor='message'
                    className='block text-xs font-bold uppercase tracking-wider text-(--text-primary) mb-2'
                  >
                    Message / Specific Requirements{' '}
                    <span className='text-red-500'>*</span>
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    required
                    rows={4}
                    placeholder='Please let us know your preferred visit time, specific floor preferences, or questions regarding legal audits...'
                    value={formData.message}
                    onChange={handleChange}
                    className='w-full rounded-xl border border-(--border-subtle) bg-(--bg-primary) px-4 py-3 text-sm font-medium text-(--text-primary) placeholder:text-(--text-muted) focus:border-(--accent) focus:outline-none focus:ring-2 focus:ring-(--accent)/20 transition-all resize-y'
                  />
                </div>

                {submitStatus === 'error' && (
                  <p className='text-xs font-semibold text-red-500'>
                    Failed to send message. Please check your network connection
                    and try again.
                  </p>
                )}

                {/* Submit Button */}
                <div>
                  <button
                    type='submit'
                    disabled={isSubmitting}
                    className='w-full rounded-xl bg-accent-light py-4 text-center text-sm font-bold text-primary-darker shadow-md hover:bg-(--accent-hover) focus-visible:outline-2 focus-visible:outline-(--accent) transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer'
                  >
                    {isSubmitting ? 'Submitting Inquiry...' : 'Submit Inquiry'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}

export { Contact };
