'use client';

import React, { useEffect, useRef, useState } from 'react';
import Swal from 'sweetalert2';
import { formatDate, DateSelectArg, EventApi } from '@fullcalendar/core';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import koLocale from '@fullcalendar/core/locales/ko';
import {
  ScheduleDataType,
  UserScheduleDataType,
} from '../../../../types/main/schedule/scheduleTypes';

interface CalendarDataType {
  id: string;
  title: string;
  start: Date;
  end: Date;
}

const CalendarContent = ({
  scheduleList,
}: {
  scheduleList: UserScheduleDataType;
}) => {
  useEffect(() => {
    if (scheduleList.scheduleLists.length > 0) {
      const newEvents = scheduleList.scheduleLists.map((schedule) => ({
        id: schedule.mentoringSessionUuid,
        title: schedule.mentoringName,
        start: new Date(`${schedule.startDate}T${schedule.startTime}`),
        end: new Date(`${schedule.endDate}T${schedule.endTime}`),
      }));

      setEvents(newEvents);
    }
    console.log(scheduleList.scheduleLists);
  }, []);

  const today = new Date();

  const [events, setEvents] = useState<CalendarDataType[]>([]);
  const [isAddEventModal, setIsAddEventModal] = useState(false);
  const [minStartDate, setMinStartDate] = useState<string>('');
  const [minEndDate, setMinEndDate] = useState<string>('');
  const defaultParams: ScheduleDataType = {
    mentoringSessionUuid: '',
    mentoringName: '',
    startDate: today,
    startTime: today,
    endDate: today,
    endTime: today,
    status: '',
    createdAt: today,
    updatedAt: today,
  };
  const [params, setParams] = useState<ScheduleDataType>(defaultParams);

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
      console.log('-----', obj);
      newParams = {
        mentoringSessionUuid: obj.mentoringSessionUuid || 0,
        mentoringName: obj.mentoringName || '',
        startDate: obj.startDate || today,
        startTime: obj.start,
        endDate: obj.endDate || today,
        endTime: obj.end,
        status: obj.status || '',
        createdAt: obj.createdAt || today,
        updatedAt: obj.updatedAt || today,
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
    if (!params.mentoringName || !params.startDate || !params.endDate) {
      showMessage('비어있는 곳을 채워주세요', 'error');
      return;
    }

    let updatedEvents = [...events];
    if (params.mentoringSessionUuid) {
      updatedEvents = updatedEvents.map((event) =>
        event.id === params.mentoringSessionUuid
          ? { ...event, ...params }
          : event
      );
    } else {
      // const maxId = Math.max(0, ...events.map((e) => e.mentoringSessionUuid));
      // updatedEvents.push({ ...params, mentoringSessionUuid: maxId + 1 });
    }

    setEvents(updatedEvents);
    Swal.fire({
      toast: true,
      icon: 'question',
      title: '스케쥴을 생성하시겠습니까?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: '저장',
      denyButtonText: '취소',
      customClass: {
        title: 'text-lg font-semibold text-gray-800 text-center',
        confirmButton:
          'bg-adaptorsYellow text-white py-2 px-4 rounded hover:bg-amber-500',
        denyButton:
          'text-black py-2 px-4 rounded bg-gray-100 hover:bg-gray-300',
        actions: '!grid !grid-cols-2 !justify-center',
      },
    }).then((result) => {
      if (result.isConfirmed) {
        showMessage('스케쥴이 생성되었습니다.');
      } else if (result.isDenied) {
        showMessage('스케쥴 생성을 취소하였습니다.', 'info');
      }
    });

    setIsAddEventModal(false);
  };

  const startDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const dateStr = event.target.value;
    if (dateStr) {
      setMinEndDate(dateStr);
      setParams({
        ...params,
        startDate: new Date(dateStr),
        endDate: new Date(dateStr),
      });
    }
  };

  const changeValue = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value, id } = e.target;
    setParams({ ...params, [id]: value });
  };

  const showMessage = (
    msg: string,
    type: 'success' | 'error' | 'info' = 'success'
  ) => {
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

  const calendarRef = useRef<FullCalendar>(null);
  const [selectedView, setSelectedView] = useState<string>('timeGridWeek');
  const [currentTitle, setCurrentTitle] = useState<string>('');

  const handlePrev = () => {
    calendarRef.current?.getApi().prev();
  };

  const handleToday = () => {
    calendarRef.current?.getApi().today();
  };

  const handleNext = () => {
    calendarRef.current?.getApi().next();
  };

  const handleViewChange = (view: string) => {
    setSelectedView(view);
    calendarRef.current?.getApi().changeView(view);
  };

  const handleDatesSet = (dateInfo: any) => {
    setCurrentTitle(dateInfo.view.title);
  };

  const handleTitleClick = () => {
    Swal.fire({
      title: '날짜 선택',
      input: 'date',
      inputAttributes: {
        min: today.toISOString().split('T')[0],
      },
      showCancelButton: true,
      confirmButtonText: '확인',
      cancelButtonText: '취소',
      customClass: {
        title: 'text-lg font-semibold text-gray-800 text-center',
        input:
          'flex justify-center text-center mt-4 block rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50',
        confirmButton:
          'bg-adaptorsYellow text-white py-2 px-4 rounded hover:bg-amber-500',
        cancelButton:
          'text-black py-2 px-4 rounded bg-gray-100 hover:bg-gray-300',
        actions: 'flex justify-end',
      },
      preConfirm: (date) => {
        if (!date) {
          Swal.showValidationMessage('날짜를 선택해 주세요.');
        } else {
          const selectedDate = new Date(date);
          calendarRef.current?.getApi().gotoDate(selectedDate);
        }
      },
    });
  };

  return (
    <section className="pt-3">
      <div className="panel mb-5">
        <div className="calendar-wrapper">
          <div className="grid grid-cols-10 items-center justify-items-center text-xl">
            <div
              className="col-span-2 cursor-pointer"
              onClick={handleTitleClick}
            >
              {currentTitle}
            </div>
            <div className="col-span-5 flex flex-row gap-x-2">
              <button
                className="p-2 hover:bg-adaptorsBlue hover:text-white rounded"
                onClick={handlePrev}
              >
                &lt;
              </button>
              <button
                className="p-2 hover:bg-adaptorsBlue hover:text-white rounded"
                onClick={handleToday}
              >
                Today
              </button>
              <button
                className="p-2 hover:bg-adaptorsBlue hover:text-white rounded"
                onClick={handleNext}
              >
                &gt;
              </button>
            </div>
            <div className="col-span-3 flex flex-row gap-x-2">
              <button
                className={`px-4 py-2 rounded text-adaptorsBlue ${selectedView === 'dayGridMonth' ? 'bg-transparent border-b-2 shadow-sm' : 'hover:bg-adaptorsBlue hover:text-white'}`}
                onClick={() => handleViewChange('dayGridMonth')}
              >
                Month
              </button>
              <button
                className={`px-4 py-2 rounded text-adaptorsBlue ${selectedView === 'timeGridWeek' ? 'bg-transparent border-b-2 shadow-sm' : 'hover:bg-adaptorsBlue hover:text-white'}`}
                onClick={() => handleViewChange('timeGridWeek')}
              >
                Week
              </button>
              <button
                className={`px-4 py-2 rounded text-adaptorsBlue ${selectedView === 'timeGridDay' ? 'bg-transparent border-b-2 shadow-sm' : 'hover:bg-adaptorsBlue hover:text-white'}`}
                onClick={() => handleViewChange('timeGridDay')}
              >
                Day
              </button>
            </div>
          </div>
          <FullCalendar
            ref={calendarRef}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{ left: '', center: '', right: '' }}
            initialView="timeGridWeek"
            height={'auto'}
            editable={true}
            dayMaxEvents={true}
            // locale={koLocale}
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
            events={events}
            eventContent={(eventInfo: any) => (
              <>
                <div className="fc-content">
                  <div className="fc-time">{eventInfo.timeText}</div>
                  <div className="fc-title">{eventInfo.event.title}</div>
                </div>
                {/* <div className="fc-resizer fc-end-resizer">
                  {eventInfo.event.extendedProps.memberName}
                </div>
                <div className="fc-resizer fc-end-resizer">
                  {eventInfo.event.extendedProps.description}
                </div> */}
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
            datesSet={handleDatesSet}
            dayHeaderContent={(arg) => {
              const weekday = arg.date.toLocaleDateString('en-us', {
                weekday: 'long',
              });
              const day = arg.date.getDate();
              const month = arg.date.getMonth() + 1;

              if (arg.view.type === 'dayGridMonth') {
                return <div>{weekday}</div>;
              } else {
                return <div>{`${weekday}, ${month}.${day}`}</div>;
              }
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
                  {params.mentoringSessionUuid ? '일정 변경' : '일정 추가'}
                </h3>
                <form className="space-y-4">
                  <div>
                    <input
                      id="title"
                      type="text"
                      name="title"
                      placeholder="제목"
                      value={params.mentoringName}
                      onChange={changeValue}
                      required
                      className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row justify-between gap-4">
                    <div className="w-full sm:w-1/2">
                      <input
                        id="start"
                        type="datetime-local"
                        name="start"
                        placeholder="시작 시간"
                        value={dateFormat(params.startTime)}
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
                        placeholder="종료 시간"
                        value={dateFormat(params.endTime)}
                        min={minEndDate}
                        onChange={(e) =>
                          setParams({
                            ...params,
                            endDate: new Date(e.target.value),
                          })
                        }
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  onClick={saveEvent}
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-adaptorsYellow text-base font-medium text-white hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-adaptorsBlue sm:ml-3 sm:w-auto sm:text-sm"
                >
                  {params.mentoringSessionUuid ? '수정' : '추가'}
                </button>
                <button
                  type="button"
                  onClick={() => setIsAddEventModal(false)}
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-adaptorsBlue sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
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
