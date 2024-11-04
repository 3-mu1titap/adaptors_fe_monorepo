'use client';

import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import koLocale from '@fullcalendar/core/locales/ko';

interface CalendarType {
  id: number;
  title: string;
  start: Date;
  end: Date;
  description: string;
  memberId: number;
  memberName: string;
  departmentName: string;
  roomId: number;
}

const CalendarContent = () => {
  const today = new Date();

  const [events, setEvents] = useState<CalendarType[]>([]);
  const [isAddEventModal, setIsAddEventModal] = useState(false);
  const [minStartDate, setMinStartDate] = useState<string>('');
  const [minEndDate, setMinEndDate] = useState<string>('');
  const defaultParams: CalendarType = {
    id: 0,
    title: '',
    start: today,
    end: today,
    description: '',
    memberId: 0,
    memberName: '',
    departmentName: '',
    roomId: 0,
  };
  const [params, setParams] = useState<CalendarType>(defaultParams);

  const dateFormat = (dt: Date): string => {
    const year = dt.getFullYear();
    const month = (dt.getMonth() + 1).toString().padStart(2, '0');
    const date = dt.getDate().toString().padStart(2, '0');
    const hours = dt.getHours().toString().padStart(2, '0');
    const mins = dt.getMinutes().toString().padStart(2, '0');
    return `${year}-${month}-${date}T${hours}:${mins}`;
  };

  const editEvent = (data: any = null) => {
    let newParams = { ...defaultParams };
    if (data) {
      const obj = data.event;
      newParams = {
        id: obj.id || 0,
        title: obj.title || '',
        start: obj.start,
        end: obj.end,
        memberName: obj.extendedProps?.memberName || '',
        departmentName: obj.extendedProps?.departmentName || '',
        roomId: obj.extendedProps?.roomId || 0,
        memberId: obj.extendedProps?.memberId || 0,
        description: obj.extendedProps?.description || '',
      };
      setMinStartDate(dateFormat(today));
      setMinEndDate(dateFormat(obj.start));
    } else {
      setMinStartDate(dateFormat(today));
      setMinEndDate(dateFormat(today));
    }
    setParams(newParams);
    setIsAddEventModal(true);
  };

  const editDate = (data: { start: Date; end: Date }) => {
    editEvent({ event: { start: data.start, end: data.end } });
  };

  const saveEvent = () => {
    if (!params.title || !params.start || !params.end) {
      showMessage('Please fill all required fields.', 'error');
      return;
    }

    let updatedEvents = [...events];
    if (params.id) {
      updatedEvents = updatedEvents.map((event) =>
        event.id === params.id ? { ...event, ...params } : event
      );
    } else {
      const maxId = Math.max(0, ...events.map((e) => e.id));
      updatedEvents.push({ ...params, id: maxId + 1 });
    }

    setEvents(updatedEvents);
    showMessage('Event has been saved successfully.');
    setIsAddEventModal(false);
  };

  const startDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const dateStr = event.target.value;
    if (dateStr) {
      setMinEndDate(dateStr);
      setParams({
        ...params,
        start: new Date(dateStr),
        end: new Date(dateStr),
      });
    }
  };

  const changeValue = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value, id } = e.target;
    setParams({ ...params, [id]: value });
  };

  const showMessage = (msg: string, type: 'success' | 'error' = 'success') => {
    Swal.fire({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 3000,
      icon: type,
      title: msg,
      padding: '10px 20px',
    });
  };

  return (
    <section className="pt-3">
      <div className="panel mb-5">
        <div className="calendar-wrapper">
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="timeGridWeek"
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay',
            }}
            height={'auto'}
            editable={true}
            dayMaxEvents={true}
            locale={koLocale}
            timeZone="local"
            selectable={true}
            selectConstraint={{
              start: today,
              end: '2100-01-01',
            }}
            droppable={true}
            selectLongPressDelay={500}
            longPressDelay={500}
            eventLongPressDelay={500}
            eventClick={(event: any) => editEvent(event)}
            select={(event: any) => editDate(event)}
            // events={events}
            eventContent={(eventInfo: any) => (
              <>
                <div className="fc-content">
                  <div className="fc-time">{eventInfo.timeText}</div>
                  <div className="fc-title">{eventInfo.event.title}</div>
                </div>
                <div className="fc-resizer fc-end-resizer">
                  {eventInfo.event.extendedProps.memberName}
                </div>
                <div className="fc-resizer fc-end-resizer">
                  {eventInfo.event.extendedProps.description}
                </div>
              </>
            )}
            nowIndicator={true}
            allDaySlot={false}
            slotDuration={'00:30:00'}
            slotLabelFormat={{
              hour: 'numeric',
              minute: '2-digit',
              omitZeroMinute: true,
              hour12: false,
            }}
            slotLabelContent={(arg) => {
              const hour = arg.date.getHours();
              return hour.toString().padStart(2, '0') + ':00';
            }}
          />
        </div>
      </div>

      {isAddEventModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">
                  {params.id ? '예약 수정하기' : '예약하기'}
                </h3>
                <form className="space-y-4">
                  <div>
                    <input
                      id="title"
                      type="text"
                      name="title"
                      placeholder="멘토링 제목"
                      value={params.title}
                      onChange={changeValue}
                      required
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row justify-between gap-4">
                    <div className="w-full sm:w-1/2">
                      <input
                        id="start"
                        type="datetime-local"
                        name="start"
                        placeholder="멘토링 예약 시작"
                        value={dateFormat(params.start)}
                        min={minStartDate}
                        onChange={startDateChange}
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      />
                    </div>
                    <div className="w-full sm:w-1/2">
                      <input
                        id="end"
                        type="datetime-local"
                        name="end"
                        placeholder="멘토링 예약 종료"
                        value={dateFormat(params.end)}
                        min={minEndDate}
                        onChange={(e) =>
                          setParams({
                            ...params,
                            end: new Date(e.target.value),
                          })
                        }
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      />
                    </div>
                  </div>
                  <div>
                    <textarea
                      id="description"
                      name="description"
                      placeholder="멘토링 상세 내용"
                      value={params.description}
                      onChange={changeValue}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      rows={4}
                    ></textarea>
                  </div>
                </form>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  onClick={saveEvent}
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-adaptorsBlue text-base font-medium text-white hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  {params.id ? '예약수정' : '예약하기'}
                </button>
                <button
                  type="button"
                  onClick={() => setIsAddEventModal(false)}
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-adaptorsBlue sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  취소
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CalendarContent;
