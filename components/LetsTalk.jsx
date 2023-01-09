import { useState } from 'react';
import { BiCheckDouble, BiInfoCircle, BiX, BiLoaderAlt } from 'react-icons/bi';
import useInput from '../hooks/useInput';

export default function LetsTalk() {
  const [name, setName, handleName] = useInput('');
  const [email, setEmail, handleEmail] = useInput('');
  const [subject, setSubject, handleSubject] = useInput('');
  const [message, setMessage, handleMessage] = useInput('');
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const submitFormHandler = async (event) => {
    event.preventDefault();

    let data = {
      name,
      email,
      subject,
      message,
    };

    try {
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      setLoading(true);

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (res.status === 200) {
        setResponse('success');
      }
      if (res.status === 400) {
        setResponse('failed');
      }
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
      setTimeout(() => {
        setResponse(null);
      }, 5000);
    }
  };

  return (
    <section className='w-full md:max-w-3xl'>
      <div>
        <h2 className='text-ash-600 dark:text-gray-200 font-medium text-4xl'>Let&#39;s Talk</h2>
        <p className='font-light text-ash-500 dark:text-gray-300 mt-2'>
          Feel free to get in touch with me regarding anything related to website development or
          just to say hi. I&#39;ll get back to you as soon as possible.
        </p>
      </div>
      {response && (
        <div
          className={`mt-6 py-3 px-4 w-full font-thin shadow rounded-md flex justify-between ${
            response === 'success' && 'bg-emerald-600 text-emerald-50 border border-emerald-700'
          } ${response === 'failed' && 'bg-red-600 text-red-50 border border-red-700'}`}
        >
          {response === 'success' && (
            <span className='flex items-center gap-2'>
              <BiCheckDouble />
              <p>Message sent</p>
            </span>
          )}
          {response === 'failed' && (
            <span className='flex items-center gap-2'>
              <BiInfoCircle />
              <p>Failed to send</p>
            </span>
          )}
          <button type='button' onClick={() => setResponse(null)}>
            <BiX />
          </button>
        </div>
      )}
      <form className='flex gap-6 flex-col mt-6' onSubmit={submitFormHandler}>
        <div className='flex flex-col xl:flex-row gap-6 md:gap-7'>
          <input
            type='text'
            name='name'
            placeholder='Name'
            value={name}
            onChange={handleName}
            className='outline-none py-2 px-4 w-full bg-ash-300 dark:bg-neutral-800 placeholder-ash-100 dark:placeholder-neutral-400 text-ash-50 font-thin shadow border-b-2 border-ash-300 dark:border-neutral-800 focus:border-secondary dark:focus:border-emerald-600'
          />
          <input
            type='email'
            name='email'
            placeholder='Email'
            value={email}
            onChange={handleEmail}
            className='outline-none py-2 px-4 w-full bg-ash-300 dark:bg-neutral-800 placeholder-ash-100 dark:placeholder-neutral-400 text-ash-50 font-thin shadow border-b-2 border-ash-300 dark:border-neutral-800 focus:invalid:border-red-600 dark:focus:invalid:border-red-600 focus:border-secondary dark:focus:border-emerald-600'
          />
        </div>
        <input
          type='text'
          name='subject'
          placeholder='Subject'
          value={subject}
          onChange={handleSubject}
          className='outline-none py-2 px-4 w-full bg-ash-300 dark:bg-neutral-800 placeholder-ash-100 dark:placeholder-neutral-400 text-ash-50 font-thin shadow border-b-2 border-ash-300 dark:border-neutral-800 focus:border-secondary dark:focus:border-emerald-600'
        />
        <textarea
          placeholder='Message'
          name='message'
          value={message}
          onChange={handleMessage}
          className='outline-none py-2 px-4 w-full min-h-[152px] bg-ash-300 dark:bg-neutral-800 placeholder-ash-100 dark:placeholder-neutral-400 text-ash-50 font-thin shadow border-b-2 border-ash-300 dark:border-neutral-800 focus:border-secondary dark:focus:border-emerald-600'
        />
        <button
          disabled={!name || !email || !subject || !message}
          className='bg-ash-400 dark:bg-neutral-700 text-ash-200 dark:text-neutral-300 w-fit ml-auto py-2 px-4 rounded-full hover:shadow-xl shadow-md transition duration-300 mt-3 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed flex items-center gap-2'
        >
          {loading && <BiLoaderAlt className='animate-spin' />}
          Send Message
        </button>
      </form>
    </section>
  );
}
