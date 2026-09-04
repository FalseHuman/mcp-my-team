# Список MCP tools

Сгенерировано автоматически (`npm run list-tools`).

Всего tools: **2516** (эндпоинты из `spec/*.json` кроме `auth.json`, дедуп по METHOD+path).

## По файлам спеки

| Файл | Tools |
| --- | ---: |
| `about-company.json` | 11 |
| `activities.json` | 7 |
| `admin.json` | 5 |
| `assets.json` | 14 |
| `calendar.json` | 46 |
| `edms.json` | 157 |
| `education.json` | 156 |
| `efficiency-v2.json` | 77 |
| `efficiency.json` | 179 |
| `exchange1c.json` | 32 |
| `gamification.json` | 97 |
| `idea.json` | 23 |
| `knowledge-base.json` | 49 |
| `main-page.json` | 117 |
| `pdp.json` | 30 |
| `recruitment.json` | 261 |
| `reports.json` | 148 |
| `requests.json` | 24 |
| `settings.json` | 655 |
| `support-v2.json` | 1 |
| `supportv1.json` | 18 |
| `surveys.json` | 56 |
| `users-v2.json` | 56 |
| `users.json` | 297 |

## Полный список

| Tool | Method | Path | Spec | Summary |
| --- | --- | --- | --- | --- |
| `aboutCompanyPagesAll` | GET | `/api/about-company/pages/all` | `about-company.json` | Список страниц для админки |
| `aboutCompanyLanding` | GET | `/api/about-company/landing` | `about-company.json` | Лендинг раздела |
| `aboutCompanyPagesIndex` | GET | `/api/about-company/pages` | `about-company.json` | Список страниц для меню |
| `aboutCompanyPageStore` | POST | `/api/about-company/pages` | `about-company.json` | Создание страницы |
| `aboutCompanyPageShow` | GET | `/api/about-company/pages/{page}` | `about-company.json` | Просмотр страницы |
| `aboutCompanyPageUpdate` | PUT | `/api/about-company/pages/{page}` | `about-company.json` | Обновление страницы |
| `aboutCompanyPageDestroy` | DELETE | `/api/about-company/pages/{page}` | `about-company.json` | Удаление страницы |
| `aboutCompanyPageCreateForm` | GET | `/api/about-company/pages/get-form-fields` | `about-company.json` | Поля формы создания |
| `aboutCompanyPageEditForm` | GET | `/api/about-company/pages/{page}/edit` | `about-company.json` | Поля формы редактирования |
| `aboutCompanyUpdateSettings` | PUT | `/api/about-company/settings` | `about-company.json` | Обновление настроек раздела |
| `aboutCompanyPagesSort` | PUT | `/api/about-company/pages/sort` | `about-company.json` | Сортировка страниц |
| `activitiesList` | GET | `/api/activities` | `activities.json` | Список активностей |
| `activitiesAbsenceList` | GET | `/api/activities/absences` | `activities.json` | Список мои запросы на отсутствия |
| `activitiesAbsenceVacancyRequestList` | GET | `/api/activities/requests` | `activities.json` | Список запросов на отсутствия/вакансию |
| `activitiesOffersList` | GET | `/api/activities/offers` | `activities.json` | Список согласования офферов |
| `activitiesSurveysList` | GET | `/api/activities/surveys` | `activities.json` | Список активных опросов |
| `activitiesKpi` | GET | `/api/activities/kpi` | `activities.json` | Список KPI |
| `activitiesObjectives` | GET | `/api/activities/objectives` | `activities.json` | Список Цели |
| `authSuperLogin` | POST | `/api/admin/login` | `admin.json` | Авторизация Супер пользователя |
| `authSuperLoginCode` | POST | `/api/admin/login-code` | `admin.json` | Авторизация Супер пользователя с кодом |
| `authUser` | GET | `/api/admin/login/{user}` | `admin.json` | Авторизация под аккаунтом пользователя |
| `logsList` | GET | `/api/admin/logs` | `admin.json` | Список файлов логов |
| `logsDownload` | GET | `/api/admin/logs/download` | `admin.json` | Скачивание файла лога |
| `assetListWithFilter` | GET | `/api/assets-with-filter` | `assets.json` | Список имущества с фильтром |
| `assetCreate` | GET | `/api/assets/create` | `assets.json` | Форма добавления имущества |
| `asseStore` | POST | `/api/assets` | `assets.json` | Добавление имущества |
| `assetDetail` | GET | `/api/assets/{asset}` | `assets.json` | Детальная информация об имуществе |
| `assetUpdate` | PUT | `/api/assets/{asset}` | `assets.json` | Обновление информации об имуществе |
| `assetDelete` | DELETE | `/api/assets/{asset}` | `assets.json` | Удаление имущества |
| `assetEdit` | GET | `/api/assets/{asset}/edit` | `assets.json` | Редактирование информации об имуществе |
| `assetCopy` | GET | `/api/assets/{asset}/copy` | `assets.json` | Копирование информации об имуществе |
| `assignmentCreate` | GET | `/api/assets/{asset}/assignments/create` | `assets.json` | Форма добавления назначения |
| `assignmentStore` | POST | `/api/assets/{asset}/assignments` | `assets.json` | Добавление назначения |
| `assignmentEdit` | GET | `/api/assignments/{assignment}/edit` | `assets.json` | Добавление назначения |
| `assignmentUpdate` | PUT | `/api/assignments/{assignment}` | `assets.json` | Обновление назначения |
| `assignmentDestroy` | DELETE | `/api/assignments/{assignment}` | `assets.json` | Удаление назначения |
| `import` | POST | `/api/assets/import` | `assets.json` | Импорт имущества из xlsx файла |
| `calendarAbsencesList` | POST | `/api/calendars/absences` | `calendar.json` | Данные по отсутствиям за заданный период |
| `calendarAbsencesListExport` | POST | `/api/calendars/absences/export` | `calendar.json` | Экспорт данных по отсутствиям за заданный период |
| `calendarAbsencesFormT7Export` | POST | `/api/calendars/absences/export-form-t-7` | `calendar.json` | Экспорт формы Т-7 за заданный период |
| `calendarExternalManagementCreate` | GET | `/api/calendars-external-management/create` | `calendar.json` | Поля для формы создания внешнего календаря |
| `calendarExternalManagementList` | GET | `/api/calendars-external-management` | `calendar.json` | Список подключений для внешних календарей |
| `calendarExternalManagementStore` | POST | `/api/calendars-external-management` | `calendar.json` | Создание внешнего календаря |
| `calendarExternalManagementEdit` | GET | `/api/calendars-external-management/{connection}/edit` | `calendar.json` | Редактирование внешнего календаря |
| `calendarExternalManagementUpdate` | PUT | `/api/calendars-external-management/{connection}` | `calendar.json` | Обновление внешнего календаря |
| `calendarExternalManagementDestroy` | DELETE | `/api/calendars-external-management/{connection}` | `calendar.json` | Удаление внешнего календаря |
| `calendarManagement` | GET | `/api/calendars-management` | `calendar.json` | Список календарей |
| `calendarManagementStore` | POST | `/api/calendars-management` | `calendar.json` | Создание календаря |
| `calendarManagementCreate` | GET | `/api/calendars-management/create` | `calendar.json` | Поля для формы создания календаря |
| `calendarManagementEdit` | GET | `/api/calendars-management/{calendar}/edit` | `calendar.json` | Редактирование календаря |
| `calendarManagementUpdate` | PUT | `/api/calendars-management/{calendar}` | `calendar.json` | Обновление календаря |
| `calendarManagementDestroy` | DELETE | `/api/calendars-management/{calendar}` | `calendar.json` | Удаление календаря |
| `calendarManagementActive` | POST | `/api/calendars-management/{calendar}/change-active` | `calendar.json` | Изменение активности календаря |
| `calendarManagementDefault` | GET | `/api/calendars-management/{calendar}/set-default` | `calendar.json` | Сделать календарь основным |
| `calendarManagementExport` | GET | `/api/calendars-management/export` | `calendar.json` | Получить файл календаря для экспорта |
| `calendarManagementExportCompany` | GET | `/api/calendars-management/export-company` | `calendar.json` | Получить файл календаря компании для экспорта |
| `calendarEventList` | GET | `/api/calendars` | `calendar.json` | Получить список событий за заданный период |
| `calendarEventStore` | POST | `/api/calendars` | `calendar.json` | Создание нового события |
| `calendarUserEventList` | GET | `/api/users/calendars/{user}` | `calendar.json` | Получить список событий пользователя за заданный период |
| `calendarEventListWithFilter` | POST | `/api/calendars/list-with-filter` | `calendar.json` | Получить список событий за заданный период с фильтрацией |
| `calendarEventListFilters` | GET | `/api/calendars/list-filters/{user}` | `calendar.json` | Получить список фильтров для событий календаря |
| `listAvailableEvents` | GET | `/api/calendars/list-available-events` | `calendar.json` | Список событий доступных для отображения |
| `calendarEventLocationsList` | POST | `/api/calendars/locations/list` | `calendar.json` | Получить список переговорных |
| `calendarEventCreate` | GET | `/api/calendars/create` | `calendar.json` | Форма для создания нового события |
| `detailEvent` | GET | `/api/calendars/{event}` | `calendar.json` | Детальная информация о событии |
| `calendarEventUpdate` | PUT | `/api/calendars/{event}` | `calendar.json` | Обновление события |
| `calendarEventDestroy` | DELETE | `/api/calendars/{event}` | `calendar.json` | Удаление события |
| `detailEventUserProfile` | GET | `/api/calendars/{event}/user/{user}` | `calendar.json` | Детальная информация о событии в профиле Сотрудника |
| `calendarEventEdit` | GET | `/api/calendars/{event}/edit` | `calendar.json` | Форма редактирования события |
| `eventRRuleToDescripiton` | POST | `/api/calendars/rrule-to-description` | `calendar.json` | Получения описания по правилу повторяемости |
| `calendarEventDecision` | POST | `/api/calendars/{event}/decision` | `calendar.json` | Решение иду (не иду) по событию |
| `calendarLocationCategoryCreate` | GET | `/api/calendars/locations/categories/create` | `calendar.json` | Форма создание категории переговорной |
| `calendarLocationCategoryStore` | POST | `/api/calendars/locations/categories` | `calendar.json` | Создание категории переговорной |
| `calendarLocationCategoryEdit` | GET | `/api/calendars/locations/categories/{category}/edit` | `calendar.json` | Форма редактирования категории переговорной |
| `calendarLocationCategoryUpdate` | PUT | `/api/calendars/locations/categories/{category}` | `calendar.json` | Обновление категории переговорной |
| `calendarLocationCategoryDestroy` | DELETE | `/api/calendars/locations/categories/{category}` | `calendar.json` | Удаление категории переговорной |
| `calendarLocationList` | GET | `/api/calendars/locations` | `calendar.json` | Список переговорных |
| `calendarLocationStore` | POST | `/api/calendars/locations` | `calendar.json` | Создание переговорной |
| `calendarLocationCreate` | GET | `/api/calendars/locations/create` | `calendar.json` | Форма создание переговорной |
| `calendarLocationEdit` | GET | `/api/calendars/locations/{location}/edit` | `calendar.json` | Форма для редактировния переговорной |
| `calendarLocationUpdate` | PUT | `/api/calendars/locations/{location}` | `calendar.json` | Изменение переговорной |
| `calendarLocationDestroy` | DELETE | `/api/calendars/locations/{location}` | `calendar.json` | Удаление переговорной |
| `calendarLocationUserShow` | POST | `/api/calendars/locations/show` | `calendar.json` | Установка признака Показывать для пользователя |
| `getApplicationCommentCreate` | GET | `/api/edms/applications/comments/create` | `edms.json` | Поля для формы создания комментария по заявлению |
| `getApplicationCommentList` | GET | `/api/edms/applications/{application}/comments` | `edms.json` | Список комментариев по заявлению |
| `getApplicationCommentStore` | POST | `/api/edms/applications/{application}/comments` | `edms.json` | Создание комментария по заявлению |
| `getApplicationCommentEdit` | GET | `/api/edms/applications/comments/{comment}/edit` | `edms.json` | Поля для формы редактирования комментария по заявлению |
| `getApplicationCommentUpdate` | PUT | `/api/edms/applications/comments/{comment}` | `edms.json` | Обновление комментария по заявлению |
| `getApplicationCommentDelete` | DELETE | `/api/edms/applications/comments/{comment}` | `edms.json` | Удаление комментария по заявлению |
| `applicationCreate` | GET | `/api/edms/application-templates/{template}/applications/create` | `edms.json` | Форма создания заявления |
| `applicationStore` | POST | `/api/edms/application-templates/{template}/applications` | `edms.json` | Создание заявлений |
| `applicationList` | GET | `/api/edms/applications` | `edms.json` | Список заявлений |
| `applicationShow` | GET | `/api/edms/applications/{application}` | `edms.json` | Детальная заявления |
| `applicationUpdate` | PUT | `/api/edms/applications/{application}` | `edms.json` | Обновление заявлений |
| `applicationDestroy` | DELETE | `/api/edms/applications/{application}` | `edms.json` | Удаление шаблона |
| `applicationEdit` | GET | `/api/edms/applications/{application}/edit` | `edms.json` | Поля формы редактирования заявлений |
| `applicationSign` | POST | `/api/edms/applications/approvals/{approval}/sign` | `edms.json` | Подписание заявления |
| `applicationRollback` | POST | `/api/edms/applications/approvals/{approval}/rollback` | `edms.json` | Отозвать заявление |
| `applicationRejectForm` | GET | `/api/edms/applications/approvals/{approval}/reject-form` | `edms.json` | Форма отзыва заявления |
| `applicationReject` | POST | `/api/edms/applications/approvals/{approval}/reject` | `edms.json` | Отклонить заявление |
| `getApplicationsReminder` | POST | `/api/edms/applications/approvals/{approval}/reminder` | `edms.json` | Отправка напоминания |
| `applicationConvertToPDF` | GET | `/api/edms/applications/{application}/convert-to-pdf` | `edms.json` | Конвертация оригинального заявления в PDF |
| `applicationSendDocsToSignature` | POST | `/api/edms/applications/approvals/{approval}/send-docs-to-signature` | `edms.json` | Отправка документов на подпись |
| `downloadApplicationDocumentFlow` | GET | `/api/edms/applications/{application}/download-document-flow` | `edms.json` | Скачивание документооборота |
| `applicationHistory` | GET | `/api/edms/applications/{application}/history` | `edms.json` | История по заявлению |
| `getAttorneyCommentCreate` | GET | `/api/edms/attorneys/comments/create` | `edms.json` | Поля для формы создания комментария по МЧД |
| `getAttorneyCommentList` | GET | `/api/edms/attorneys/{attorney}/comments` | `edms.json` | Список комментариев по МЧД |
| `getAttorneyCommentStore` | POST | `/api/edms/attorneys/{attorney}/comments` | `edms.json` | Создание комментария по МЧД |
| `getAttorneyCommentEdit` | GET | `/api/edms/attorneys/comments/{comment}/edit` | `edms.json` | Поля для формы редактирования комментария по МЧД |
| `getAttorneyCommentUpdate` | PUT | `/api/edms/attorneys/comments/{comment}` | `edms.json` | Обновление комментария по МЧД |
| `getAttorneyCommentDelete` | DELETE | `/api/edms/attorneys/comments/{comment}` | `edms.json` | Удаление комментария по МЧД |
| `attorneysList` | GET | `/api/edms/attorneys` | `edms.json` | Список МЧД |
| `storeAttorney` | POST | `/api/edms/attorneys` | `edms.json` | Создание МЧД |
| `createAttorney` | GET | `/api/edms/attorneys/create` | `edms.json` | Форма создания МЧД |
| `showAttorney` | GET | `/api/edms/attorneys/{attorney}` | `edms.json` | Детальная МЧД |
| `updateAttorney` | PUT | `/api/edms/attorneys/{attorney}` | `edms.json` | Обновление МЧД |
| `deleteAttorney` | DELETE | `/api/edms/attorneys/{attorney}` | `edms.json` | Удаление МЧД |
| `editAttorney` | GET | `/api/edms/attorneys/{attorney}/edit` | `edms.json` | Форма редактирования МЧД |
| `downloadAttorneyZIP` | GET | `/api/edms/attorneys/{attorney}/download` | `edms.json` | Скачивание МЧД и подписи |
| `getInfoFromXMLAttorney` | POST | `/api/edms/attorneys/get-info-from-xml` | `edms.json` | Получение юрлица и доверителя по XML |
| `getCertificateCreate` | GET | `/api/edms/certificates/create` | `edms.json` | Форма создания заявки |
| `getCertificatesList` | GET | `/api/edms/certificates` | `edms.json` | Список сертификатов |
| `getCertificateStore` | POST | `/api/edms/certificates` | `edms.json` | Создание заявки на получение сертификата |
| `certificateEdit` | GET | `/api/edms/certificates/{certificate}/edit` | `edms.json` | Редактирование сертификата сотрудником |
| `updateEdit` | PUT | `/api/edms/certificates/{certificate}` | `edms.json` | Отправка сотрудником в УЦ |
| `desctroyCertificate` | DELETE | `/api/edms/certificates/{certificate}` | `edms.json` | Удаление заявки |
| `getCertificateTemplatePath` | GET | `/api/edms/certificates/{certificate}/get-template` | `edms.json` | Получить путь до шаблона заявки |
| `certificateConfirmApplication` | POST | `/api/edms/certificates/{certificate}/confirm-application` | `edms.json` | Подтвердить заявку на получение сертификата |
| `certificateRejectApplication` | POST | `/api/edms/certificates/{certificate}/reject-application` | `edms.json` | Отклонить заявку на получение сертификата |
| `getStatusCertificateForSignature` | GET | `/api/edms/certificates/get-status-certificate-for-signature` | `edms.json` | Получить статус сертификата для подписания |
| `getCertificateHistories` | GET | `/api/edms/certificates/{certificate}/history` | `edms.json` | Получить историю действий по сертификату |
| `getEDMSTabs` | GET | `/api/edms/get-tabs` | `edms.json` | Получение доступных вкладок раздела КЭДО |
| `getMeSnils` | GET | `/api/edms/get-me-snils` | `edms.json` | Получить снилс текущего пользователя |
| `formConfirm` | GET | `/api/edms/form-confirm` | `edms.json` | Поля для формы подтверждения |
| `delegationCreate` | GET | `/api/edms/delegations/{document_type}/create` | `edms.json` | Поля для формы делегирования подписания |
| `delegationStore` | POST | `/api/edms/delegations/{document_type}/delegate` | `edms.json` | Делегирование подписания |
| `checkCanSign` | POST | `/api/edms/delegations/{document_type}/check-can-sign` | `edms.json` | Проверка возможности подписания |
| `getDocumentCommentCreate` | GET | `/api/edms/documents/comments/create` | `edms.json` | Поля для формы создания комментария по документу |
| `getDocumentCommentList` | GET | `/api/edms/documents/{document}/comments` | `edms.json` | Список комментариев по документу |
| `getDocumentCommentStore` | POST | `/api/edms/documents/{document}/comments` | `edms.json` | Создание комментария по документу |
| `getDocumentCommentEdit` | GET | `/api/edms/documents/comments/{comment}/edit` | `edms.json` | Поля для формы редактирования комментария по документу |
| `getDocumentCommentUpdate` | PUT | `/api/edms/documents/comments/{comment}` | `edms.json` | Обновление комментария по документу |
| `getDocumentCommentDelete` | DELETE | `/api/edms/documents/comments/{comment}` | `edms.json` | Удаление комментария по документу |
| `getDocumentsCreate` | GET | `/api/edms/documents/create` | `edms.json` | Форма загрузки документов |
| `getDocumentsList` | GET | `/api/edms/documents` | `edms.json` | Список документов |
| `getDocumentsStore` | POST | `/api/edms/documents` | `edms.json` | Создание документов |
| `getDocumentDetail` | GET | `/api/edms/documents/{document}` | `edms.json` | Детальная документа |
| `getDocumentsDestroy` | DELETE | `/api/edms/documents/{document}` | `edms.json` | Удаление документа |
| `getDocumentsEdit` | GET | `/api/edms/documents/edit` | `edms.json` | Поля формы редактирования документов |
| `getDocumentsUpdate` | PUT | `/api/edms/documents/update` | `edms.json` | Обновление документов |
| `documentSendToSignature` | POST | `/api/edms/documents/{document}/send-to-signature` | `edms.json` | Отправка документа на подписание |
| `getDocumentsApproval` | POST | `/api/edms/documents/approvals/{approval}/sign` | `edms.json` | Подписание документа |
| `getDocumentReminder` | POST | `/api/edms/documents/approvals/{approval}/reminder` | `edms.json` | Отправка напоминания |
| `getDivisionByUser` | GET | `/api/settings/get-division-by-user` | `edms.json` | Получение юридического лица к которому относится сотрудник |
| `getRepresentativeByDivision` | GET | `/api/settings/get-representative-by-division` | `edms.json` | Получение представителя юрлица |
| `convertToPDF` | GET | `/api/edms/documents/{document}/convert-to-pdf` | `edms.json` | Конвертация оригинального документа в PDF |
| `downloadOriginalFile` | GET | `/api/edms/documents/{document}/download-original-file` | `edms.json` | Скачивание оригинального документа |
| `downloadDocumentFlow` | GET | `/api/edms/documents/{document}/download-document-flow` | `edms.json` | Скачивание документооборота |
| `documentReject` | POST | `/api/edms/documents/approvals/{approval}/reject` | `edms.json` | Отклонить документ |
| `documentRejectForm` | GET | `/api/edms/documents/approvals/{approval}/reject-form` | `edms.json` | Форма отклонения документа |
| `documentSendDocsToSignature` | POST | `/api/edms/documents/approvals/{approval}/send-docs-to-signature` | `edms.json` | Отправка документов на подпись |
| `getDocumentHistory` | GET | `/api/edms/documents/{document}/history` | `edms.json` | История по документу |
| `exportDocuments` | GET | `/api/edms/{type_document}/export` | `edms.json` | Экспорт документов, ЛНА или заявлений |
| `multiRemindApprovals` | POST | `/api/edms/normative-acts/{normative_act}/remind-approvals` | `edms.json` | Массовое напоминание о подписании ЛНА |
| `multiDeleteApprovals` | POST | `/api/edms/normative-acts/{normative_act}/delete-approvals` | `edms.json` | Массовое делегирование документов |
| `multiValidateBeforeSignDocuments` | POST | `/api/edms/multi-actions/document_type/{document_type}` | `edms.json` | Валидация перед подписанием документов |
| `sendDrafrToSignature` | POST | `/api/edms/multi-actions/document_type/{document_type}/send-draft-to-signing` | `edms.json` | Подписание документов |
| `validateApprovals` | POST | `/api/edms/normative-acts/{normative_act}/validate-approvals` | `edms.json` | Валидация листа ознакомления |
| `getDelegateForm` | GET | `/api/edms/multi-actions/document_type/{document_type}/get-delegate-form` | `edms.json` | Получение формы с представителем юрлица |
| `multiDelegateDocuments` | POST | `/api/edms/multi-actions/document_type/{document_type}/delegate` | `edms.json` | Массовое делегирование документов |
| `getRejectForm` | GET | `/api/edms/multi-actions/document_type/{document_type}/get-reject-form` | `edms.json` | Получение формы отклонения |
| `multiRejectDocuments` | POST | `/api/edms/multi-actions/document_type/{document_type}/reject` | `edms.json` | Массовое отклонение документов |
| `multiSignDocuments` | POST | `/api/edms/multi-actions/document_type/{document_type}/sign` | `edms.json` | Подписание документов |
| `multiSendDocsToSignatures` | POST | `/api/edms/multi-actions/document_type/{document_type}/send-docs-to-signature` | `edms.json` | Отправка документов на подписание |
| `deleteNormativeActApproval` | DELETE | `/api/edms/normative-acts/approvals/{approval}/delete` | `edms.json` | Удаление подписанта из нормативного акта |
| `getFormCreateApproval` | GET | `/api/edms/normative-acts/{normative_act}/approvals/create-form` | `edms.json` | Форма для добавления подписанта |
| `addUsersToApproval` | POST | `/api/edms/normative-acts/{normative_act}/approvals/add-users` | `edms.json` | Добавление пользователя в список подписантов |
| `getNormativeActCommentCreate` | GET | `/api/edms/normative-acts/comments/create` | `edms.json` | Поля для формы создания комментария по локальному нормативному акту |
| `getNormativeActCommentList` | GET | `/api/edms/normative-acts/{normative_act}/comments` | `edms.json` | Список комментариев по локальному нормативному акту |
| `getNormativeActCommentStore` | POST | `/api/edms/normative-acts/{normative_act}/comments` | `edms.json` | Создание комментария по локальному нормативному акту |
| `getNormativeActCommentEdit` | GET | `/api/edms/normative-acts/comments/{comment}/edit` | `edms.json` | Поля для формы редактирования комментария по локальному нормативному акту |
| `getNormativeActCommentUpdate` | PUT | `/api/edms/normative-acts/comments/{comment}` | `edms.json` | Обновление комментария по локальному нормативному акту |
| `getNormativeActCommentDelete` | DELETE | `/api/edms/normative-acts/comments/{comment}` | `edms.json` | Удаление комментария по локальному нормативному акту |
| `getNormativeActCreate` | GET | `/api/edms/normative-acts/create` | `edms.json` | Поля для формы создания локального нормативного акта |
| `getNormativeActList` | GET | `/api/edms/normative-acts` | `edms.json` | Список локальных нормативных актов |
| `NormativeActStore` | POST | `/api/edms/normative-acts` | `edms.json` | Создание локального нормативного акта |
| `getNormativeActShow` | GET | `/api/edms/normative-acts/{normative_act}` | `edms.json` | Детальная локального нормативного акта |
| `NormativeActUpdate` | PUT | `/api/edms/normative-acts/{normative_act}` | `edms.json` | Редактирование локального нормативного акта |
| `NormativeActDestroy` | DELETE | `/api/edms/normative-acts/{normative_act}` | `edms.json` | Удаление локального нормативного акта |
| `NormativeActEdit` | GET | `/api/edms/normative-acts/{normative_act}/edit` | `edms.json` | Редактирование локального нормативного акта |
| `NormativeActSendToSignature` | POST | `/api/edms/normative-acts/{normative_act}/send-to-signature` | `edms.json` | Отправка локального нормативного акта на подписание |
| `NormativeActFamiliarizationList` | GET | `/api/edms/normative-acts/{normative_act}/get-familiarization-list` | `edms.json` | Получение списка ознакомления |
| `getNormativeActSign` | POST | `/api/edms/normative-acts/approvals/{approval}/sign` | `edms.json` | Подписание нормативного акта |
| `getNormativeActReminder` | POST | `/api/edms/normative-acts/approvals/{approval}/reminder` | `edms.json` | Отправка напоминания |
| `downloadNormativeActOriginalFile` | GET | `/api/edms/normative-acts/{normative_act}/download-original-file` | `edms.json` | Скачивание оригинального локального нормативного акта |
| `downloadDocumentNormativeActFlow` | GET | `/api/edms/normative-acts/{normative_act}/download-document-flow` | `edms.json` | Скачивание документооборота локального нормативного акта |
| `normativeActReject` | POST | `/api/edms/normative-acts/approvals/{approval}/reject` | `edms.json` | Отклонить нормативный акт |
| `normativeActRejectForm` | GET | `/api/edms/normative-acts/approvals/{approval}/reject-form` | `edms.json` | Форма отзыва нормативного акта |
| `normativeActSendDocsToSignature` | POST | `/api/edms/normative-acts/approvals/{approval}/send-docs-to-signature` | `edms.json` | Отправка документов на подпись |
| `exportFamiliarizationList` | GET | `/api/edms/normative-acts/{normative_act}/export-familiarization-list` | `edms.json` | Экспорт листа ознакомления |
| `normativeActHistory` | GET | `/api/edms/normative-acts/{normative_act}/history` | `edms.json` | История по ЛНА |
| `normativeActConvertToPDF` | GET | `/api/edms/normative-acts/{normative_act}/convert-to-pdf` | `edms.json` | Конвертация ЛНА в PDF |
| `getUsersToAutoAdd` | GET | `/api/edms/normative-acts/{normative_act}/get-users-to-auto-add` | `edms.json` | Получение пользователей для автоматического добавления |
| `applicationTemplateCreate` | GET | `/api/edms/application-templates/create` | `edms.json` | Форма создания шаблона заявления |
| `applicationTemplateList` | GET | `/api/edms/application-templates` | `edms.json` | Список шаблонов заявлений |
| `applicationTemplateStore` | POST | `/api/edms/application-templates` | `edms.json` | Создание шаблона заявлений |
| `applicationTemplateEdit` | GET | `/api/edms/application-templates/{template}/edit` | `edms.json` | Поля формы редактирования шаблона заявлений |
| `applicationTemplateUpdate` | PUT | `/api/edms/application-templates/{template}` | `edms.json` | Обновление шаблона заявлений |
| `applicationTemplateDestroy` | DELETE | `/api/edms/application-templates/{template}` | `edms.json` | Удаление шаблона |
| `applicationTemplatePublish` | POST | `/api/edms/application-templates/{template}/publish` | `edms.json` | Публикация шаблона |
| `getTemplateCustomFields` | GET | `/api/edms/application-templates/{template}/custom-fields` | `edms.json` | Получение кастомных полей шаблона |
| `applicationTemplateExecutorsCreate` | GET | `/api/edms/application-templates/executors/create` | `edms.json` | Форма создания утверждающего по шаблону заявления |
| `applicationTemplateExecutorstore` | POST | `/api/edms/application-templates/{template}/executors` | `edms.json` | Создание утверждающего по шаблону заявления |
| `applicationTemplateExecutorEdit` | GET | `/api/edms/application-templates/executors/{executor}/edit` | `edms.json` | Форма редактирования утверждающего по шаблону заявления |
| `applicationTemplateExecutorUpdate` | PUT | `/api/edms/application-templates/executors/{executor}` | `edms.json` | Обновление утверждающего по шаблону заявления |
| `applicationTemplateExecutorDestroy` | DELETE | `/api/edms/application-templates/executors/{executor}` | `edms.json` | Удаление утверждающего по шаблону заявления |
| `applicationTemplateExecutorsSort` | PUT | `/api/edms/application-templates/{template}/executors-sort` | `edms.json` | Сортировка подписывающих по шаблону заявления |
| `applicationTemplateFieldCreate` | GET | `/api/edms/application-templates/fields/create` | `edms.json` | Форма создания кастомного поля |
| `applicationTemplateFieldStore` | POST | `/api/edms/application-templates/{template}/fields` | `edms.json` | Создание кастомного поля |
| `applicationTemplateFieldEdit` | GET | `/api/edms/application-templates/fields/{field}/edit` | `edms.json` | Поля формы редактирования кастомного поля |
| `applicationTemplateFieldUpdate` | PUT | `/api/edms/application-templates/fields/{field}` | `edms.json` | Обновление кастомного поля |
| `applicationTemplateFieldDestroy` | DELETE | `/api/edms/application-templates/fields/{field}` | `edms.json` | Удаление кастомного поля |
| `applicationTemplateFieldSort` | PUT | `/api/edms/application-templates/{template}/fields-sort` | `edms.json` | Сортировка кастомных полей |
| `applicationTemplateGroupCreate` | GET | `/api/edms/application-templates/groups/create` | `edms.json` | Форма создания группы шаблона |
| `applicationTemplateGroupStore` | POST | `/api/edms/application-templates/groups` | `edms.json` | Создание группы шаблона |
| `applicationTemplateGroupEdit` | GET | `/api/edms/application-templates/groups/{group}/edit` | `edms.json` | Поля формы редактирования группы шаблона |
| `applicationTemplateGroupUpdate` | PUT | `/api/edms/application-templates/groups/{group}` | `edms.json` | Обновление группы шаблона |
| `applicationTemplateGroupDestroy` | DELETE | `/api/edms/application-templates/groups/{group}` | `edms.json` | Удаление документа |
| `applicationTemplateGroupSort` | PUT | `/api/edms/application-templates/groups/sort` | `edms.json` | Сортировка групп шаблона |
| `applicationTemplateObserverStore` | POST | `/api/edms/application-templates/{template}/observers` | `edms.json` | Создание наблюдателя по шаблону заявления |
| `applicationTemplateObserverUpdate` | PUT | `/api/edms/application-templates/observers/{observer}` | `edms.json` | Обновление наблюдателя по шаблону заявления |
| `applicationTemplateObserverDestroy` | DELETE | `/api/edms/application-templates/observers/{observer}` | `edms.json` | Удаление наблюдателя по шаблону заявления |
| `applicationTemplateObserversSort` | PUT | `/api/edms/application-templates/{template}/observers-sort` | `edms.json` | Сортировка наблюдателей по шаблону заявления |
| `applicationTemplateSignersrCreate` | GET | `/api/edms/application-templates/signers/create` | `edms.json` | Форма создания подписывающего по шаблону заявления |
| `applicationTemplateSignerstore` | POST | `/api/edms/application-templates/{template}/signers` | `edms.json` | Создание подписывающего по шаблону заявления |
| `applicationTemplateSignerEdit` | GET | `/api/edms/application-templates/signers/{signer}/edit` | `edms.json` | Форма редактирования подписывающего по шаблону заявления |
| `applicationTemplateSignerUpdate` | PUT | `/api/edms/application-templates/signers/{signer}` | `edms.json` | Обновление подписывающего по шаблону заявления |
| `applicationTemplateSignerDestroy` | DELETE | `/api/edms/application-templates/signers/{signer}` | `edms.json` | Удаление подписывающего по шаблону заявления |
| `applicationTemplateSignersSort` | PUT | `/api/edms/application-templates/{template}/signers-sort` | `edms.json` | Сортировка подписывающих по шаблону заявления |
| `edmsSearchDocumentType` | GET | `/api/edms/search-document-type` | `edms.json` | Список типов документов |
| `autoAssignmentTriggerList` | GET | `/api/courses/{course}/auto-assignment-triggers` | `education.json` | Список правил автоназначения курса |
| `autoAssignmentTriggerStore` | POST | `/api/courses/{course}/auto-assignment-triggers` | `education.json` | Создание правила автоназначения |
| `autoAssignmentTriggerCreate` | GET | `/api/courses/{course}/auto-assignment-triggers/create` | `education.json` | Поля формы создания правила автоназначения |
| `autoAssignmentTriggerEdit` | GET | `/api/courses/{course}/auto-assignment-triggers/{trigger}/edit` | `education.json` | Поля формы редактирования правила автоназначения |
| `autoAssignmentTriggerUpdate` | PUT | `/api/courses/{course}/auto-assignment-triggers/{trigger}` | `education.json` | Обновление правила автоназначения |
| `autoAssignmentTriggerDestroy` | DELETE | `/api/courses/{course}/auto-assignment-triggers/{trigger}` | `education.json` | Удаление правила автоназначения |
| `courseCategoriesCreate` | GET | `/api/course-categories/create` | `education.json` | Поля для создания категории |
| `coursesCategoriesList` | GET | `/api/course-categories` | `education.json` | Список категорий |
| `categories` | POST | `/api/course-categories` | `education.json` | Создание категории |
| `courseCategoryEdit` | POST | `/api/course-categories/{category}/edit` | `education.json` | Редактирование категории |
| `categoryUpdate` | PUT | `/api/course-categories/{category}` | `education.json` | Обновление категории |
| `categoriesDestroy` | DELETE | `/api/course-categories/{category}` | `education.json` | Удаление категории |
| `courseCategorySort` | POST | `/api/course-categories/sort` | `education.json` | Сортировка категорий курса |
| `listByTags` | POST | `/api/course-categories/{category}/course-by-tags` | `education.json` | Список курсов по тегам |
| `listAnswers` | GET | `/api/education/checking-answers` | `education.json` | Список заданий на проверку |
| `checkingAnswers` | GET | `/api/education/checking-answers/{answer}` | `education.json` | Форма для проверки задания |
| `checkAnswer` | PUT | `/api/education/checking-answers/{answer}` | `education.json` | Отправка решения по проверке ответа |
| `coursesCreate` | GET | `/api/courses/create` | `education.json` | Поля для создания курса |
| `coursesList` | GET | `/api/courses` | `education.json` | Список курсов |
| `coursesStore` | POST | `/api/courses` | `education.json` | Создание курса |
| `coursesArchiveList` | GET | `/api/courses/archive` | `education.json` | Список архивных курсов |
| `lessons` | GET | `/api/courses/{course}` | `education.json` | Содержание курса |
| `coursesUpdate` | PUT | `/api/courses/{course}` | `education.json` | Обновление курса |
| `coursesDestroy` | DELETE | `/api/courses/{course}` | `education.json` | Удаление курса |
| `coursesEdit` | GET | `/api/courses/{course}/edit` | `education.json` | Поля для редактирования курса |
| `copyCourse` | GET | `/api/courses/{course}/copy` | `education.json` | Копирование курса |
| `activateCourse` | GET | `/api/courses/{course}/activate` | `education.json` | Активация курса |
| `archiveCourse` | GET | `/api/courses/{course}/archive` | `education.json` | Архивация курса |
| `getCourseUsersIds` | GET | `/api/courses/{course}/get-users-ids` | `education.json` | Получить идентификаторы пользователей курса |
| `courseAppointUsersEdit` | GET | `/api/courses/{course}/appoint-users/edit` | `education.json` | Форма для назначения пользователей по курсу |
| `courseAppointUsers` | POST | `/api/courses/{course}/appoint-users` | `education.json` | Назначить пользователей на курс |
| `coursePublishStatus` | GET | `/api/courses/{course}/get-publish-status` | `education.json` | Получить статус публикации курса |
| `educationGetTabs` | GET | `/api/education/get-tabs` | `education.json` | Получение доступных вкладок раздела Обучение |
| `getCourseName` | GET | `/api/courses/{course}/get-name` | `education.json` | Получить название курса |
| `notifyAboutChanges` | POST | `/api/courses/{course}/notify-about-changes` | `education.json` | Прислать уведомление об изменении в курсе |
| `courseGetRating` | GET | `/api/education/my-courses/rating/{course}` | `education.json` | Оценки курса и комментарии |
| `courseSendRating` | POST | `/api/education/my-courses/rating/{course}` | `education.json` | Оценить курс |
| `participantsRating` | GET | `api/courses/participants/rating` | `education.json` | Рейтинг учеников |
| `downloadParticipantsRating` | POST | `api/courses/participants/rating-download` | `education.json` | Скачать таблицу рейтинга учеников |
| `flowList` | GET | `/api/courses/flows` | `education.json` | Список потоков |
| `flowStore` | POST | `/api/courses/flows` | `education.json` | Создание потока |
| `courseFlowCreate` | GET | `/api/courses/flows/create` | `education.json` | Поля для формы создания потока |
| `flowShow` | GET | `/api/courses/flows/{flow}` | `education.json` | Детальная страница потока |
| `flowUpdate` | PUT | `/api/courses/flows/{flow}` | `education.json` | Обновление потока |
| `flowDestroy` | DELETE | `/api/courses/flows/{flow}` | `education.json` | Удаление потока |
| `flowShowExport` | POST | `/api/courses/flows/{flow}/export` | `education.json` | Экспорт детальной страницы потока |
| `flowEdit` | GET | `/api/courses/flows/{flow}/edit` | `education.json` | Поля для формы редактирования потока |
| `listFlowsByCourse` | GET | `/api/courses/{course}/flows` | `education.json` | Список потоков по курсу |
| `participantStats` | GET | `/api/courses/flows/{flow}/participant/{participant}/stats` | `education.json` | Статистика прохождения ученика по потоку |
| `participantStatsByTestOrTask` | GET | `/api/courses/participants/{participant}/materials/{material}` | `education.json` | Статистика прохождения ученика по тесту или заданию |
| `participantDelete` | DELETE | `/api/courses/flows/{flow}/participant/{participant}/delete` | `education.json` | Удаление ученика с потока |
| `completeMaterialManually` | POST | `/api/courses/flows/{flow}/participant/{participant}/materials/{material}/complete` | `education.json` | Завершить материал вручную |
| `returnMaterialToStudy` | POST | `/api/courses/flows/{flow}/participant/{participant}/materials/{material}/return` | `education.json` | Вернуть материал на изучение |
| `flowParticipantsList` | GET | `/api/courses/flows/participants` | `education.json` | Таблица участников потока |
| `flowListUsers` | GET | `/api/courses/flows/list-users` | `education.json` | Список сотрудников для добавления в поток |
| `groupList` | GET | `/api/courses/groups` | `education.json` | Список групп |
| `groupStore` | POST | `/api/courses/groups` | `education.json` | Создание группы |
| `groupCreate` | GET | `/api/courses/groups/create` | `education.json` | Поля для формы создания группы |
| `groupEdit` | GET | `/api/courses/groups/{group}/edit` | `education.json` | Поля для формы редактирования группы |
| `groupUpdate` | PUT | `/api/courses/groups/{group}` | `education.json` | Обновление группы |
| `groupDestroy` | DELETE | `/api/courses/groups/{group}` | `education.json` | Удаление группы |
| `groupListUsers` | GET | `/api/courses/groups/{group}/list-users` | `education.json` | Список пользователей |
| `courseMaterialStore` | POST | `/api/course-sections/{section}/material-type/{type}` | `education.json` | Создание материала |
| `courseMaterialEdit` | GET | `/api/course-materials/{material}/edit` | `education.json` | Редактирование материала |
| `courseMaterialEditSettings` | GET | `/api/course-materials/{material}/edit-settings` | `education.json` | Редактирование материала |
| `courseMaterialUpdateSettings` | PUT | `/api/course-materials/{material}/update-settings` | `education.json` | Обновление настроек материала |
| `courseMaterialUpdate` | PUT | `/api/course-materials/{material}` | `education.json` | Обновление материала |
| `courseMaterialDestroy` | DELETE | `/api/course-materials/{material}` | `education.json` | Удаление материала |
| `courseMaterialSaveQuestions` | POST | `/api/course-materials/{material}/save-questions` | `education.json` | Сохранение вопросов теста |
| `courseSectionSortMaterials` | POST | `/api/course-sections/{section}/sort-materials` | `education.json` | Сортировка материалов раздела |
| `curseSortQuestions` | POST | `/api/course-materials/{material}/sort-questions` | `education.json` | Сортировка вопросов тип Опрос/Тестирование |
| `multiActionsCourseMaterials` | POST | `/api/courses/flows/{flow}/participant/{participant}/multi-actions/course-materials` | `education.json` | Массовые операции с материалами курсов |
| `myCoursesList` | GET | `/api/education/my-courses` | `education.json` | Список доступных курсов для текущего пользователя |
| `catalogCourses` | GET | `/api/education/my-courses/catalog` | `education.json` | Каталог курсов |
| `courseViewed` | POST | `/api/education/my-courses/viewed` | `education.json` | Отметить курсы как просмотренные |
| `courseStats` | GET | `/api/education/my-courses/statistics` | `education.json` | Статистика о прохождении курсов для пользователя |
| `courseDetail` | GET | `/api/education/my-courses/{course}` | `education.json` | Детальная курса |
| `courseDetailPassage` | GET | `/api/education/my-courses/participants-passage/{participant}` | `education.json` | Детальная прохождения участника |
| `courseApoint` | POST | `/api/education/my-courses/{course}/appoint` | `education.json` | Назначение курса самому себе |
| `participantCancel` | DELETE | `/api/education/participants/{participant}/cancel` | `education.json` | Отмена курса |
| `myTrainingList` | GET | `/api/education/my-trainings` | `education.json` | Список доступных тренингов для текущего пользователя |
| `trainingApoint` | GET | `/api/education/trainings/{training}/appoint` | `education.json` | Запись на тренинг |
| `trainingManagerUsersEdit` | GET | `/api/education/trainings/{training}/appoint-users-manager` | `education.json` | Поля для редактирования пользователей тренинга |
| `trainingApointManager` | POST | `/api/education/trainings/{training}/appoint-users-manager` | `education.json` | Запись на тренинг подчиненых |
| `trainingtCancel` | GET | `/api/education/trainings/{training}/cancel` | `education.json` | Отмена тренинга |
| `coursePassage` | GET | `/api/education/course-passage/{participant}` | `education.json` | Содержание курса |
| `passageMaterial` | GET | `/api/education/course-passage/{participant}/materials/{material}` | `education.json` | Получение содержимого материала |
| `startMaterialPassage` | POST | `/api/education/course-passage/{participant}/materials/{material}/start` | `education.json` | Начать прохождение Задания/Опроса/Теста |
| `sendAnswerToTask` | POST | `/api/education/course-passage/{participant}/materials/{material}/send-answer-to-task` | `education.json` | Отправка ответа на материал типа Задание |
| `completeCourse` | POST | `/api/education/course-passage/{participant}/complete-course` | `education.json` | Завершение курса |
| `setPassageTime` | POST | `/api/education/course-passage/{participant}/materials/{material}/set-passage-time` | `education.json` | Обновить время прохождения материала |
| `scormProgress` | PUT | `/api/education/course-passage/{participant}/materials/{material}/scorm-progress` | `education.json` | Сохранение прогресса по прохождению SCORM |
| `setStatusScorm` | PUT | `/api/education/course-passage/{participant}/materials/{material}/set-status-scorm` | `education.json` | Установление статуса по прохождению SCORM |
| `startMaterialTest` | POST | `/api/education/course-passage/{participant}/materials/{material}/start-test` | `education.json` | Начать прохождение Теста |
| `getMaterialQuestion` | GET | `/api/education/course-passage/{participant}/materials/{material}/questions/{question}` | `education.json` | Получить содержимое вопроса теста |
| `sendAnswerToTest` | POST | `/api/education/course-passage/{participant}/materials/{material}/questions/{question}/send-answer-to-test` | `education.json` | Отправка ответа на материал типа Тест |
| `setStatusViewed` | POST | `/api/education/course-passage/{participant}/materials/{material}/set-status-viewed` | `education.json` | Установка статуса Просмотрено при изучении материала |
| `finishTest` | POST | `/api/education/course-passage/{participant}/materials/{material}/finish-test` | `education.json` | авершить материал типа Тест |
| `sections` | POST | `/api/courses/{course}/sections` | `education.json` | Создание раздела |
| `sectionUpdate` | PUT | `/api/course-sections/{section}` | `education.json` | Обновление раздела |
| `sectionsDestroy` | DELETE | `/api/course-sections/{section}` | `education.json` | Удаление раздела |
| `courseSectionSort` | POST | `/api/courses/{course}/sort-section` | `education.json` | Сортировка разделов курса |
| `courseSectionPublished` | POST | `/api/course-sections/{section}/toggle-published` | `education.json` | Публикация раздела |
| `courseSectionCopy` | POST | `/api/course-sections/{section}/copy` | `education.json` | Копирование раздела |
| `sectionDocumentList` | GET | `/api/course-sections/{section}/documents` | `education.json` | Список документов |
| `sectionDocumentUpload` | POST | `/api/course-sections/{section}/documents` | `education.json` | Загрузить документ для раздела |
| `sectionDocumentDelete` | DELETE | `/api/course-sections/documents/{document}` | `education.json` | Удалить документ у раздела |
| `speakersList` | GET | `/api/trainings/speakers` | `education.json` | Получение списка спикеров |
| `speakerStore` | POST | `/api/trainings/speakers` | `education.json` | Создание Спикера |
| `speakerCreate` | GET | `/api/trainings/speakers/create` | `education.json` | Поля для формы создания Спикера |
| `speakerEdit` | GET | `/api/trainings/speakers/{speaker}/edit` | `education.json` | Поля для формы редактирования Спикера |
| `speakerUpdate` | PUT | `/api/trainings/speakers/{speaker}` | `education.json` | Обновление Спикера |
| `d75a50a28e97a7bf322eddba108ea15a` | DELETE | `/api/trainings/speakers/{speaker}` | `education.json` | Удаление внешнего Спикера |
| `courseSurveyQuesctionCreate` | GET | `/api/courses/question-survey-types/{type}/create` | `education.json` | Форма создания вопроса |
| `courseSurveyQuesctionStore` | POST | `/api/courses/materials/{material}/question-survey-types/{type}` | `education.json` | Создание вопроса |
| `courseSurveyQuesctionEdit` | GET | `/api/courses/survey-questions/{question}/edit` | `education.json` | Форма редактирования вопроса |
| `courseSurveyQuesctionUpdate` | PUT | `/api/courses/survey-questions/{question}` | `education.json` | Обновление вопроса |
| `courseSurveyQuestionDelete` | DELETE | `/api/courses/survey-questions/{question}` | `education.json` | Удаление вопроса |
| `coursesQuestionFilesDelete` | DELETE | `/api/courses/question-files/{file}` | `education.json` | Удаление файла вопроса |
| `courseTagCreate` | GET | `/api/course-tags/create` | `education.json` | Поля для создания тега |
| `coursesTagsList` | GET | `/api/course-tags` | `education.json` | Список тегов |
| `tags` | POST | `/api/course-tags` | `education.json` | Создание тега |
| `courseTagUpdate` | PUT | `/api/course-tags` | `education.json` | Обновление тегов |
| `courseTagsEdit` | GET | `/api/course-tags/{tag}/edit` | `education.json` | Редактирование тега |
| `tagUpdate` | PUT | `/api/course-tags/{tag}` | `education.json` | Обновление тега |
| `tagsDestroy` | DELETE | `/api/course-tags/{tag}` | `education.json` | Удаление тега |
| `courseTagSort` | PUT | `/api/courses/sort-tags` | `education.json` | Сортировка тегов курса |
| `courseTestQuestionCreate` | GET | `/api/courses/question-test-types/{type}/create` | `education.json` | Форма создания вопроса |
| `courseTestQuestionStore` | POST | `/api/courses/materials/{material}/question-test-types/{type}` | `education.json` | Создание вопроса |
| `courseTestQuesctionEdit` | GET | `/api/courses/test-questions/{question}/edit` | `education.json` | Форма редактирования вопроса |
| `courseTestQuesctionUpdate` | PUT | `/api/courses/test-questions/{question}` | `education.json` | Обновление вопроса |
| `courseTestQuesctionDelete` | DELETE | `/api/courses/test-questions/{question}` | `education.json` | Удаление вопроса |
| `trainingsCreate` | GET | `/api/trainings/create` | `education.json` | Поля для создания тренинга |
| `trainingShow` | GET | `/api/trainings/{training}` | `education.json` | Детальная информация о тренинге |
| `trainingsUpdate` | PUT | `/api/trainings/{training}` | `education.json` | Обновление Тренинга |
| `trainingDestroy` | DELETE | `/api/trainings/{training}` | `education.json` | Удаление тренинга |
| `trainingsList` | GET | `/api/trainings` | `education.json` | Список Тренингов |
| `trainingsStore` | POST | `/api/trainings` | `education.json` | Создание Тренинга |
| `copyTraining` | GET | `/api/trainings/{training}/copy` | `education.json` | Копирование тренинга |
| `trainingEdit` | GET | `/api/trainings/{training}/edit` | `education.json` | Поля для редактирования тренинга |
| `trainingUsersEdit` | GET | `/api/trainings/{training}/users/edit` | `education.json` | Поля для редактирования пользователей тренинга |
| `trainingsUsersList` | GET | `/api/trainings/{training}/users` | `education.json` | Список Участников Тренинга |
| `trainingsusersUpdate` | PUT | `/api/trainings/{training}/users` | `education.json` | Обновление Участников Тренинга |
| `trainingsusersDelete` | DELETE | `/api/trainings/{training}/users/{trainingUser}` | `education.json` | Удаление Участника Тренинга |
| `trainingsVarificationUsersList` | GET | `/api/trainings/{training}/verification` | `education.json` | Список подтверждений регистрации на тренинге |
| `trainingsPesentsersList` | GET | `/api/trainings/{training}/present` | `education.json` | Список подтверждений в участии на тренинге |
| `archiveTraining` | GET | `/api/trainings/{training}/archive` | `education.json` | Архивация Тренинга |
| `trainingsGetTabs` | GET | `/api/trainings/{training}/get-tabs` | `education.json` | Получение доступных вкладок раздела Тренинги |
| `getResponsibleUsers` | GET | `/api/trainings/{training}/responsible-users` | `education.json` | Получить список ответственных пользователей |
| `trainingTagCreate` | GET | `/api/training-tags/create` | `education.json` | Поля для создания тега |
| `trainingTagsList` | GET | `/api/training-tags` | `education.json` | Список тегов |
| `TrainingTags` | POST | `/api/training-tags` | `education.json` | Создание тега |
| `trainingTagUpdate` | PUT | `/api/training-tags` | `education.json` | Обновление тегов |
| `trainingTagsEdit` | GET | `/api/training-tags/{trainingTag}/edit` | `education.json` | Редактирование тега |
| `trainingTagsDestroy` | DELETE | `/api/training-tags/{trainingTag}` | `education.json` | Удаление тега |
| `trainingTagSort` | PUT | `/api/training-tags/tags-sort` | `education.json` | Сортировка тегов тренинга |
| `evaluationAppointmentWayEdit` | GET | `/api/v2/efficiency/evaluations/{evaluation}/appointment-ways` | `efficiency-v2.json` | Редактирования способа назначения коллег для оценки |
| `evaluationAppointmentWayUpdate` | PUT | `/api/v2/efficiency/evaluations/{evaluation}/appointment-ways` | `efficiency-v2.json` | Обновление способа назначения коллег для оценки |
| `parseCompetencies` | POST | `/api/v2/parse-competencies` | `efficiency-v2.json` | Парсинг компетенций для получения массива |
| `evaluationList` | GET | `/api/v2/efficiency/evaluations` | `efficiency-v2.json` | Список созданных оценок |
| `evaluationStore` | POST | `/api/v2/efficiency/evaluations` | `efficiency-v2.json` | Сохранение новой оценки |
| `evaluationParticipantList` | GET | `/api/v2/efficiency/evaluations/{evaluation}/get-participants` | `efficiency-v2.json` | Список участников оценки |
| `evaluationCreate` | GET | `/api/v2/efficiency/evaluations/create` | `efficiency-v2.json` | Созданние новой оценки |
| `evaluationShow` | GET | `/api/v2/efficiency/evaluations/{evaluation}` | `efficiency-v2.json` | Просмотр существующей оценки |
| `evaluationUpdate` | PUT | `/api/v2/efficiency/evaluations/{evaluation}` | `efficiency-v2.json` | Обновление существующей оценки |
| `evaluationDestroy` | DELETE | `/api/v2/efficiency/evaluations/{evaluation}` | `efficiency-v2.json` | Удаление оценки |
| `evaluationEdit` | GET | `/api/v2/efficiency/evaluations/{evaluation}/edit` | `efficiency-v2.json` | Редактирование существующей оценки |
| `evaluationCopy` | POST | `/api/v2/efficiency/evaluations/{evaluation}/copy` | `efficiency-v2.json` | Копирование существующей оценки |
| `evaluationUpdateAndPublish` | PUT | `/api/v2/efficiency/evaluations/{evaluation}/publish` | `efficiency-v2.json` | Публикация существующей оценки |
| `storePositionTemplate` | POST | `/api/v2/efficiency/evaluations/{evaluation}/position-template` | `efficiency-v2.json` | Создание новой привязки должности к шаблону |
| `updatePositionTemplate` | PUT | `/api/v2/efficiency/position-template/{position_template}` | `efficiency-v2.json` | Создание новой привязки должности к шаблону |
| `destroyPositionTemplate` | DELETE | `/api/v2/efficiency/position-template/{position_template}` | `efficiency-v2.json` | Создание новой привязки должности к шаблону |
| `evaluationDetail` | GET | `/api/v2/efficiency/evaluations/{evaluation}/detail/{user}` | `efficiency-v2.json` | Просмотр оценки сотрудника |
| `evaluationDetailCompetencies` | GET | `/api/v2/efficiency/evaluations/{evaluation}/detail/{user}/competencies` | `efficiency-v2.json` | Блок компетенций карточки оценки |
| `evaluationDetailExport` | POST | `/api/v2/efficiency/evaluations/{evaluation}/detail/{user}/export` | `efficiency-v2.json` | Экспорт карточки оценки сотрудника |
| `evaluationAiReportGenerate` | POST | `/api/v2/efficiency/evaluations/{evaluation}/detail/{user}/ai-report/generate` | `efficiency-v2.json` | Запуск генерации ИИ-отчёта |
| `evaluationAiReportEditForm` | GET | `/api/v2/efficiency/evaluations/{evaluation}/detail/{user}/ai-report` | `efficiency-v2.json` | Форма ИИ-отчёта |
| `evaluationAiReportUpdate` | PUT | `/api/v2/efficiency/evaluations/{evaluation}/detail/{user}/ai-report` | `efficiency-v2.json` | Сохранение ИИ-отчёта |
| `evaluationV2Export` | POST | `/api/v2/efficiency/evaluations/{evaluation}/export` | `efficiency-v2.json` | Экспорт цикла оценки |
| `evaluationV2ExportTotal` | POST | `/api/v2/efficiency/evaluations/{evaluation}/export-total` | `efficiency-v2.json` | Экспорт цикла оценки (один лист) |
| `evaluationPdfExportOptions` | GET | `/api/v2/efficiency/evaluations/{evaluation}/report-pdf/options` | `efficiency-v2.json` | Опции экспорта PDF отчёта 360 |
| `evaluationPdfExport` | POST | `/api/v2/efficiency/evaluations/{evaluation}/report-pdf/export` | `efficiency-v2.json` | Экспорт PDF отчёта 360 |
| `evaluationPdfExportMultiOptions` | POST | `/api/v2/efficiency/evaluations/{evaluation}/report-pdf/multi/options` | `efficiency-v2.json` | Опции массового экспорта PDF |
| `evaluationPdfMultiExport` | POST | `/api/v2/efficiency/evaluations/{evaluation}/report-pdf/multi/export` | `efficiency-v2.json` | Массовый экспорт PDF отчётов 360 |
| `evaluationNotifyUser` | GET | `/api/v2/efficiency/evaluations/user-evaluations/{user_evaluation}/notify` | `efficiency-v2.json` | Напоминание о прохождении оценки |
| `evaluationNotifyUserByAssessed` | GET | `/api/v2/efficiency/evaluations/{evaluation}/users/{user}/assessed/{assessed}/notify` | `efficiency-v2.json` | Напоминание о прохождении оценки |
| `updateAnswer` | POST | `/api/v2/efficiency/evaluation-questions/{question}` | `efficiency-v2.json` | Обновление описания для уровней вопроса |
| `evaluationCreateParticipantForm` | GET | `/api/v2/efficiency/evaluations/{evaluation}/users/create` | `efficiency-v2.json` | Форма добавления участника в оценку |
| `evaluationAddParticipant` | POST | `/api/v2/efficiency/evaluations/{evaluation}/users` | `efficiency-v2.json` | Добавление участника в оценку |
| `evaluationDeleteParticipant` | DELETE | `/api/v2/efficiency/evaluations/{evaluation}/users/{user}` | `efficiency-v2.json` | Удаление участника из оценки |
| `getFormByEvaluator` | GET | `/api/v2/efficiency/evaluations/{evaluation}/get-form-by-evaluator` | `efficiency-v2.json` | Форма полей для роли оценивающего |
| `getFormByTemplateType` | GET | `/api/v2/efficiency/evaluations/{evaluation}/get-form-by-template-type` | `efficiency-v2.json` | Форма поля для связки роль + тип шаблона |
| `updateEvaluatorAndTemplates` | POST | `/api/v2/efficiency/evaluations/{evaluation}/update-evaluator-and-templates` | `efficiency-v2.json` | Сохранение связки роль + шаблоны |
| `evaluationManagerAppointmentWayEdit` | GET | `/api/v2/efficiency/evaluations/{evaluation}/manager-appointment-ways` | `efficiency-v2.json` | Редактирования способа назначения руководителей для оценки |
| `evaluationManagerAppointmentWayUpdate` | PUT | `/api/v2/efficiency/evaluations/{evaluation}/manager-appointment-ways` | `efficiency-v2.json` | Обновление способа назначения коллег для оценки |
| `getMatrix` | GET | `/api/v2/efficiency/evaluations/{evaluation}/get-matrix` | `efficiency-v2.json` | 9 Box Matrix |
| `getUsersByBlock` | GET | `/api/v2/efficiency/evaluations/{evaluation}/blocks/{block}/get-users` | `efficiency-v2.json` | Список пользователей по отдельному блоку матрицы |
| `getInfoByBlock` | GET | `/api/v2/efficiency/evaluations/matrix-blocks/{block}/get-info` | `efficiency-v2.json` | Информация о распределении пользоватея в конкретный блок |
| `getUsersByEvaluator` | GET | `/api/v2/efficiency/evaluations/{evaluation}/assessed/{user}/evaluators/{evaluator}` | `efficiency-v2.json` | Список пользователей по роли |
| `evaluationTemplateList` | GET | `/api/v2/efficiency/evaluation-template` | `efficiency-v2.json` | Список шаблонов оценки |
| `evaluationTemplateStoreV2` | POST | `/api/v2/efficiency/evaluation-template` | `efficiency-v2.json` | Сохранение нового шаблона оценки |
| `evaluationTemplateCreate` | GET | `/api/v2/efficiency/evaluation-template/create` | `efficiency-v2.json` | Данные для создания шаблона оценки |
| `evaluationTemplateStore` | POST | `/api/v2/efficiency/evaluation-template/template-type` | `efficiency-v2.json` | Сохранение нового шаблона оценки |
| `evaluationTemplateShow` | GET | `/api/v2/efficiency/evaluation-template/{evaluation_template}` | `efficiency-v2.json` | Просмотр шаблона оценки |
| `evaluationTemplateUpdate` | PUT | `/api/v2/efficiency/evaluation-template/{evaluation_template}` | `efficiency-v2.json` | Обновление шаблона оценки |
| `evaluationTemplateDestroy` | DELETE | `/api/v2/efficiency/evaluation-template/{evaluation_template}` | `efficiency-v2.json` | Удаление шаблона оценки |
| `evaluationTemplateEdit` | GET | `/api/v2/efficiency/evaluation-template/{evaluation_template}/edit` | `efficiency-v2.json` | Данные для редактирования шаблона оценки |
| `evaluationTemplateCopy` | GET | `/api/v2/efficiency/evaluation-template/{evaluation_template}/copy` | `efficiency-v2.json` | Копирование шаблона оценки |
| `getCompetenciesList` | POST | `/api/v2/efficiency/get-competencies-list` | `efficiency-v2.json` | Получение списка всех компетенций |
| `userEvaluationGetTabs` | GET | `/api/v2/users/evaluations/{evaluation}/get-tabs` | `efficiency-v2.json` | Получение доступных табов |
| `userEvaluationShow` | GET | `/api/v2/users/evaluations/{evaluation}` | `efficiency-v2.json` | Список вопросов |
| `userEvaluationEmployeeNominates` | GET | `/api/v2/users/evaluations/{evaluation}/employee-nominates` | `efficiency-v2.json` | Ответственный/Сотрудник назначает коллег для оценки |
| `editColleagues` | POST | `/api/v2/users/evaluations/edit-colleagues` | `efficiency-v2.json` | Возврат к редактированию назначения коллег |
| `editManagers` | POST | `/api/v2/users/evaluations/edit-managers` | `efficiency-v2.json` | Возврат к редактированию назначения руководителей |
| `assignManager` | POST | `/api/v2/users/evaluations/assign-manager` | `efficiency-v2.json` | Назначение ответственного за руководителей |
| `SendEmployeeNominates` | POST | `/api/v2/users/evaluations/{user_nominate}/employee-nominates` | `efficiency-v2.json` | Сотрудник отправляет список назначенных коллег для оценки себя |
| `userEvaluationConfigAssignedColleagues` | GET | `/api/v2/users/evaluations/{evaluation}/confirm-assigned-colleagues` | `efficiency-v2.json` | Модерация списка коллег для оценки сотрудника |
| `acceptEmployeeNominates` | POST | `/api/v2/users/evaluations/confirm-assigned-colleagues/{user_nominate}` | `efficiency-v2.json` | Ответственный принимает список коллег от сотрудника |
| `userEvaluationManagerNominates` | GET | `/api/v2/users/evaluations/{evaluation}/manager-nominates` | `efficiency-v2.json` | Руководитель назначает коллег для оценки |
| `userEvaluationManagerNominatesManagers` | GET | `/api/v2/users/evaluations/{evaluation}/manager-nominates-managers` | `efficiency-v2.json` | Руководитель назначает руководителей (форма) |
| `managersAppoint` | POST | `/api/v2/users/evaluations/{user_evaluation}/manager-nominates-managers` | `efficiency-v2.json` | Руководитель назначает коллег |
| `userEvaluationEmployeeNominatesManagers` | GET | `/api/v2/users/evaluations/{evaluation}/employee-nominates-managers` | `efficiency-v2.json` | Сотрудник назначает руководителей |
| `userEvaluationSendEmployeeNominatesManagers` | POST | `/api/v2/users/evaluations/{user_nominate}/employee-nominates-managers` | `efficiency-v2.json` | Отправка списка руководителей от сотрудника |
| `managerAppoint` | POST | `/api/v2/users/evaluations/{user_evaluation}/manager-nominates` | `efficiency-v2.json` | Руководитель назначает коллег |
| `saveAnswer` | POST | `/api/v2/users/evaluations/passage/{user_evaluation}/answers` | `efficiency-v2.json` | Сохранение ответа |
| `complete` | POST | `/api/v2/users/evaluations/passage/{user_evaluation}/complete` | `efficiency-v2.json` | Завершение оценки |
| `getUserCompetenciesList` | POST | `/api/v2/efficiency/evaluation/{user}/competencies` | `efficiency-v2.json` | Получение компетенций сотрудника |
| `getPossibleCompetenciesList` | POST | `/api/v2/efficiency/evaluation/get-competencies-list` | `efficiency-v2.json` | Получение списка всех компетенций |
| `storeUserCompetencies` | POST | `api/v2/efficiency/evaluation/{user}/competencies` | `efficiency-v2.json` | Сохранение компетенций сотрудника |
| `evaluationUserGraph` | GET | `/api/v2/efficiency/evaluation/{user}/types/{type}/entities/{entity}/get-graph` | `efficiency-v2.json` | График с динамикой изменения значений |
| `rollbackUserEvaluation` | POST | `/api/v2/users/evaluations/{user_evaluation}/rollback` | `efficiency-v2.json` | Откат прохождения оценки |
| `userEvaluationConfirmAssignedManagers` | GET | `/api/v2/users/evaluations/{evaluation}/confirm-assigned-managers` | `efficiency-v2.json` | Модерация списка руководителей |
| `userEvaluationAcceptEmployeeNominatesManagers` | POST | `/api/v2/users/evaluations/employee-nominates-managers/{user_nominate}` | `efficiency-v2.json` | Модератор принимает список руководителей от сотрудника |
| `efficiencyReview` | GET | `/api/efficiency` | `efficiency.json` | Данные для обзорной страницы |
| `efficiencyGetTabs` | GET | `/api/efficiency/get-tabs` | `efficiency.json` | Получение доступных вкладок раздела Эффективность |
| `evaluationList_api_efficiency_evaluations` | GET | `/api/efficiency/evaluations` | `efficiency.json` | Список созданных оценок |
| `evaluationStore_api_efficiency_evaluations` | POST | `/api/efficiency/evaluations` | `efficiency.json` | Сохранение новой оценки |
| `evaluationCreate_api_efficiency_evaluations_create` | GET | `/api/efficiency/evaluations/create` | `efficiency.json` | Созданние новой оценки |
| `evaluationShow_api_efficiency_evaluations_evaluation` | GET | `/api/efficiency/evaluations/{evaluation}` | `efficiency.json` | Просмотр существующей оценки |
| `evaluationUpdate_api_efficiency_evaluations_evaluation` | PUT | `/api/efficiency/evaluations/{evaluation}` | `efficiency.json` | Обновление существующей оценки |
| `evaluationDestroy_api_efficiency_evaluations_evaluation` | DELETE | `/api/efficiency/evaluations/{evaluation}` | `efficiency.json` | Удаление оценки |
| `evaluationDetail_api_efficiency_evaluations_evaluation_detail_user` | GET | `/api/efficiency/evaluations/{evaluation}/detail/{user}` | `efficiency.json` | Просмотр оценки сотрудника |
| `sharingEvaluationUsers` | GET | `/api/efficiency/evaluations/{evaluation}/detail/{user}/sharing` | `efficiency.json` | Получить сотрудников оценки |
| `sharingEvaluationDetail` | POST | `/api/efficiency/evaluations/{evaluation}/detail/{user}/sharing` | `efficiency.json` | Поделиться оценкой сотрудника |
| `evaluationEdit_api_efficiency_evaluations_evaluation_edit` | GET | `/api/efficiency/evaluations/{evaluation}/edit` | `efficiency.json` | Редактирование существующей оценки |
| `evaluationCopy_api_efficiency_evaluations_evaluation_copy` | GET | `/api/efficiency/evaluations/{evaluation}/copy` | `efficiency.json` | Копирование существующей оценки |
| `evaluationUpdateAndPublish_api_efficiency_evaluations_evaluation_publish` | PUT | `/api/efficiency/evaluations/{evaluation}/publish` | `efficiency.json` | Обновление и публикация существующей оценки |
| `evaluationNotifyUser_api_efficiency_evaluations_evaluation_notify_user` | GET | `/api/efficiency/evaluations/{evaluation}/notify/{user}` | `efficiency.json` | Напоминание о прохождении оценки |
| `evaluationTemplateList_api_efficiency_evaluation_template` | GET | `/api/efficiency/evaluation-template` | `efficiency.json` | Список шаблонов оценки |
| `evaluationTemplateStore_api_efficiency_evaluation_template` | POST | `/api/efficiency/evaluation-template` | `efficiency.json` | Сохранение нового шаблона оценки |
| `evaluationTemplateCreate_api_efficiency_evaluation_template_create` | GET | `/api/efficiency/evaluation-template/create` | `efficiency.json` | Данные для создания шаблона оценки |
| `evaluationTemplateShow_api_efficiency_evaluation_template_evaluation_template` | GET | `/api/efficiency/evaluation-template/{evaluation_template}` | `efficiency.json` | Просмотр шаблона оценки |
| `evaluationTemplateUpdate_api_efficiency_evaluation_template_evaluation_template` | PUT | `/api/efficiency/evaluation-template/{evaluation_template}` | `efficiency.json` | Обновление шаблона оценки |
| `evaluationTemplateDestroy_api_efficiency_evaluation_template_evaluation_template` | DELETE | `/api/efficiency/evaluation-template/{evaluation_template}` | `efficiency.json` | Удаление шаблона оценки |
| `evaluationTemplateEdit_api_efficiency_evaluation_template_evaluation_template_edit` | GET | `/api/efficiency/evaluation-template/{evaluation_template}/edit` | `efficiency.json` | Данные для редактирования шаблона оценки |
| `evaluationTemplateCopy_api_efficiency_evaluation_template_evaluation_template_copy` | GET | `/api/efficiency/evaluation-template/{evaluation_template}/copy` | `efficiency.json` | Копирование шаблона оценки |
| `evaluationTemplateQuestionCreate` | GET | `/api/efficiency/evaluation-template/{evaluation_template}/question-type/{question_type}/questions/create` | `efficiency.json` | Данные для создания вопроса |
| `evaluationTemplateQuestionStore` | POST | `/api/efficiency/evaluation-template/{evaluation_template}/question-type/{question_type}/questions` | `efficiency.json` | Сохранение вопроса |
| `evaluationTemplateQuestionEdit` | GET | `/api/efficiency/questions/{question}/edit` | `efficiency.json` | Данные для редактирования вопроса |
| `evaluationTemplateQuestionUpdate` | PUT | `/api/efficiency/questions/{question}` | `efficiency.json` | Обновление вопроса |
| `evaluationTemplateQuestionDestroy` | DELETE | `/api/efficiency/questions/{question}` | `efficiency.json` | Удаление вопроса |
| `evaluationTemplateQuestionUpdateSort` | POST | `/api/efficiency/evaluation-template/{evaluation_template}/questions/update-sort` | `efficiency.json` | Изменение сортировки вопросов |
| `KPIEditFormula` | GET | `/api/efficiency/key-performance-indicators/{indicator}/formula` | `efficiency.json` | Получение формулы KPI |
| `KPIStoreFormula` | POST | `/api/efficiency/key-performance-indicators/{indicator}/formula` | `efficiency.json` | Сохранение формулы KPI |
| `KPIV2List` | GET | `/api/efficiency/key-performance-indicators` | `efficiency.json` | Список созданных KPI |
| `KPIStore` | POST | `/api/efficiency/key-performance-indicators` | `efficiency.json` | Создание KPI |
| `KPICreate` | GET | `/api/efficiency/key-performance-indicators/create` | `efficiency.json` | Данные для создания KPI |
| `KPIAssignForm` | GET | `/api/efficiency/key-performance-indicators/{indicator}/assign` | `efficiency.json` | Получение формы назначения KPI |
| `KPIAssign` | POST | `/api/efficiency/key-performance-indicators/{indicator}/assign` | `efficiency.json` | Назначение KPI пользователям |
| `KPIMassAssignForm` | GET | `/api/efficiency/key-performance-indicators/assign-form` | `efficiency.json` | Получение формы массового назначения KPI |
| `KPIUnassign` | DELETE | `/api/efficiency/key-performance-indicators/{indicator}/unassign` | `efficiency.json` | Отмена назначения KPI |
| `KPIArchive` | POST | `/api/efficiency/key-performance-indicators/{indicator}/archive` | `efficiency.json` | Архивирование KPI |
| `KPIActivate` | POST | `/api/efficiency/key-performance-indicators/{indicator}/activate` | `efficiency.json` | Активация KPI |
| `KPICopy` | POST | `/api/efficiency/key-performance-indicators/{indicator}/copy` | `efficiency.json` | Копирование KPI |
| `KPIUserInfo` | GET | `/api/efficiency/key-performance-indicators/user-info` | `efficiency.json` | Получение информации о KPI пользователя |
| `KPIShow` | GET | `/api/efficiency/key-performance-indicators/{key_performance_indicator}` | `efficiency.json` | Просмотр KPI |
| `KPIUpdate` | PUT | `/api/efficiency/key-performance-indicators/{key_performance_indicator}` | `efficiency.json` | Обновление KPI |
| `KPIEdit` | GET | `/api/efficiency/key-performance-indicators/{key_performance_indicator}/edit` | `efficiency.json` | Данные для редактирования KPI |
| `KPIChangeBonusForm` | GET | `/api/efficiency/key-performance-indicators/change-bonus` | `efficiency.json` | Получение формы изменения бонуса |
| `KPIChangeBonus` | POST | `/api/efficiency/key-performance-indicators/change-bonus` | `efficiency.json` | Изменение бонусных значений |
| `KPIDestroy` | DELETE | `/api/efficiency/key-performance-indicators/{key_performance_indicators}` | `efficiency.json` | Удадение KPI |
| `KPICreateProgress` | GET | `/api/efficiency/key-performance-indicators/{key_performance_indicator}/progress` | `efficiency.json` | Получение формы для ввода прогресса KPI |
| `KPIStoreUserProgress` | POST | `/api/efficiency/key-performance-indicators/{indicator}/progress` | `efficiency.json` | Сохранение прогресса пользователя по KPI |
| `KPIStore_omment` | POST | `/api/efficiency/key-performance-indicators/{key_performance_indicator}/comment` | `efficiency.json` | Добавление комментария KPI |
| `KPIStoreUserComment` | POST | `/api/efficiency/key-performance-indicators/{indicator}/comment` | `efficiency.json` | Добавление комментария к пользовательскому KPI |
| `KPIUpdate_omment` | POST | `/api/efficiency/key-performance-indicators/comment/{comment}` | `efficiency.json` | Обновление комментария KPI |
| `KPIDestroyComment` | DELETE | `/api/efficiency/key-performance-indicators/comment/{comment}` | `efficiency.json` | Удаление комментария KPI |
| `KPIStoreTarget` | POST | `/api/efficiency/key-performance-indicators/{key_performance_indicator}/target` | `efficiency.json` | Сохранение плана KPI |
| `KPIStoreUserTarget` | POST | `/api/efficiency/key-performance-indicators/{indicator}/user-target` | `efficiency.json` | Сохранение пользовательского плана KPI |
| `KPIGetTabs` | GET | `/api/efficiency/key-performance-indicators/get-tabs` | `efficiency.json` | Получение доступных вкладок KPI |
| `KPIBonusTemplateForm` | GET | `/api/efficiency/key-performance-indicators/bonus-templates/create` | `efficiency.json` | Получение формы для создания шаблона бонуса KPI |
| `KPIBonusTemplatesForm` | GET | `/api/efficiency/key-performance-indicators/bonus-templates` | `efficiency.json` | Получение формы для списка шаблонов бонусов KPI |
| `KPIStoreBonusTemplate` | POST | `/api/efficiency/key-performance-indicators/bonus-templates` | `efficiency.json` | Сохранение шаблона бонуса KPI |
| `KPIGetBonusTemplates` | GET | `/api/efficiency/key-performance-indicators/bonus-templates/{template}` | `efficiency.json` | Получение значений шаблона бонуса KPI |
| `KPIGetIndicatorOwners` | GET | `/api/efficiency/key-performance-indicators/{indicator}/users` | `efficiency.json` | Получение владельцев KPI |
| `KPIGetIndicatorTemplateOwners` | GET | `/api/efficiency/key-performance-indicators/{indicator}/template-users` | `efficiency.json` | Получение пользователей шаблона KPI |
| `KPIUsersBonus` | GET | `/api/efficiency/key-performance-indicators/{indicator}/users-bonus` | `efficiency.json` | Премии всех сотрудников по KPI |
| `objectiveCommentStore` | POST | `/api/efficiency/objectives/{objective}/comments` | `efficiency.json` | Добавление нового комментария цели |
| `objectiveCommentEdit` | GET | `/api/efficiency/comments/{comment}/edit` | `efficiency.json` | Форма изменения комментария цели |
| `objectiveCommentUpdate` | PUT | `/api/efficiency/comments/{comment}` | `efficiency.json` | Изменение комментария цели |
| `objectiveCommentDestroy` | DELETE | `/api/efficiency/comments/{comment}` | `efficiency.json` | Удаление комментария цели |
| `objectiveList` | GET | `/api/efficiency/objectives` | `efficiency.json` | Список созданных целей |
| `objectiveStore` | POST | `/api/efficiency/objectives` | `efficiency.json` | Создание новой цели |
| `objectiveCreate` | GET | `/api/efficiency/objectives/create` | `efficiency.json` | Форма создания цели |
| `objectiveShow` | GET | `/api/efficiency/objectives/{objective}` | `efficiency.json` | Данные для просмотра цели |
| `objectiveUpdate` | PUT | `/api/efficiency/objectives/{objective}` | `efficiency.json` | Обновление цели |
| `objectiveDestroy` | DELETE | `/api/efficiency/objectives/{objective}` | `efficiency.json` | Удаление цели |
| `objectiveEdit` | GET | `/api/efficiency/objectives/{objective}/edit` | `efficiency.json` | Форма редактирования цели |
| `objectiveClose` | GET | `/api/efficiency/objectives/{objective}/close` | `efficiency.json` | Закрытие цели |
| `objectiveArchive` | GET | `/api/efficiency/objectives/{objective}/archive` | `efficiency.json` | Установка статуса Архив цели |
| `objectiveOpen` | GET | `/api/efficiency/objectives/{objective}/open` | `efficiency.json` | Установка статуса Открыт цели |
| `objectiveCopy` | GET | `/api/efficiency/objectives/{objective}/copy` | `efficiency.json` | Форма редактирования скопированной цели |
| `objectiveResultCreate` | GET | `/api/efficiency/objectives/{objective}/results/create` | `efficiency.json` | Форма создания результата цели |
| `objectiveResultStore` | POST | `/api/efficiency/objectives/{objective}/results` | `efficiency.json` | Создание нового результата цели |
| `objectiveResultEdit` | GET | `/api/efficiency/results/{result}/edit` | `efficiency.json` | Форма редактирования результата цели |
| `objectiveResultUpdate` | PUT | `/api/efficiency/results/{result}` | `efficiency.json` | Обновление результата цели |
| `objectiveResultDestroy` | DELETE | `/api/efficiency/results/{result}` | `efficiency.json` | Удаление результата цели |
| `objectiveResultUpdateValues` | POST | `/api/efficiency/results/{result}/values` | `efficiency.json` | Обновление значений результата цели |
| `oneOnOneCommentList` | GET | `/api/one-on-one/{one-on-one}/comments` | `efficiency.json` | Список комментариев для 1-on-1 |
| `oneOnOneCommentStore` | POST | `/api/one-on-one/{one-on-one}/comments` | `efficiency.json` | Сохранение нового комментария для 1-on-1 |
| `oneOnOneCommentEdit` | GET | `/api/one-on-one-comment/{comment}/edit` | `efficiency.json` | Поля для редактирования комментария 1-on-1 |
| `oneOnOneCommentUpdate` | PUT | `/api/one-on-one-comment/{comment}` | `efficiency.json` | Обновление комментария для 1-on-1 |
| `oneOnOneCommentDestroy` | DELETE | `/api/one-on-one-comment/{comment}` | `efficiency.json` | Удаление комментария для 1-on-1 |
| `oneOnOneCreate` | GET | `/api/one-on-one/create` | `efficiency.json` | Форма создания нового 1-on-1 |
| `oneOnOneStore` | POST | `/api/one-on-one` | `efficiency.json` | Сохранение нового 1-on-1 |
| `oneOnOneShow` | GET | `/api/one-on-one/{one-on-one}` | `efficiency.json` | Показ детальной страницы 1-on-1 |
| `oneOnOneUpdate` | PUT | `/api/one-on-one/{one-on-one}` | `efficiency.json` | Обновление 1-on-1 |
| `oneOnOneDestroy` | DELETE | `/api/one-on-one/{one-on-one}` | `efficiency.json` | Удаление 1-on-1 |
| `oneOnOnePublic` | GET | `/api/one-on-one/{one_on_one}/public` | `efficiency.json` | Публикация 1-on-1 |
| `oneOnOneComplete` | POST | `/api/one-on-one/{one-on-one}/complete` | `efficiency.json` | Завершение 1-on-1 |
| `oneOnOneCreateNext` | GET | `/api/one-on-one/{one-on-one}/create-next` | `efficiency.json` | Форма создания следующего 1-on-1. |
| `oneOnOneNext` | POST | `/api/one-on-one/{one-on-one}/create-next` | `efficiency.json` | Планирование следующего 1-on-1 |
| `oneOnOneListScheduled` | GET | `/api/one-on-one-list` | `efficiency.json` | Получение списка запланированных 1-on-1 |
| `oneOnOneListWithFilter` | POST | `/api/one-on-one/list-with-filter` | `efficiency.json` | Получение списка всех созданных 1-on-1 |
| `oneOnOnelistForProfile` | GET | `/api/one-on-one-for-profile/{user}` | `efficiency.json` | Получение списка 1-on-1 для профиля пользователя |
| `oneOnOnelistForReview` | GET | `/api/one-on-one-for-review/{user}` | `efficiency.json` | 1-on-1 для вкладки Обзор в Мои активности |
| `oneOnOneNotifyUpdate` | GET | `/api/one-on-one/{one_on_one}/update` | `efficiency.json` | Уведомление об изменениях 1-on-1 |
| `DismissalRiskLevelsProfile` | GET | `/api/one-on-one-for-profile/{user}/risk-levels` | `efficiency.json` | Получение данных изменения риска увольнения |
| `ImportanceLevelsProfile` | GET | `/api/one-on-one-for-profile/{user}/importance-levels` | `efficiency.json` | Получение данных изменения уровня ценности сотрудника |
| `objectiveCommentCreateForm` | GET | `/api/efficiency/objectives/{objective}/comments/create` | `efficiency.json` | Форма создания комментария к цели |
| `oneOnOneEditForm` | GET | `/api/one-on-one/{one_on_one}/edit` | `efficiency.json` | Форма редактирования one-on-one (resource) |
| `efficiencyKpiMultiAction` | POST | `/api/efficiency/multi-actions/key-performance-indicators` | `efficiency.json` | Массовые действия KPI |
| `kpiBonusCreateForm` | POST | `/api/efficiency/key-performance-indicators/bonus/create` | `efficiency.json` | Форма бонуса KPI |
| `kpiBonusEdit` | GET | `/api/efficiency/key-performance-indicators/bonus/{bonus}/edit` | `efficiency.json` | Редактирование бонуса KPI |
| `kpiUserBonusEdit` | GET | `/api/efficiency/key-performance-indicators/user-bonus/{bonus}/edit` | `efficiency.json` | Редактирование пользовательского бонуса KPI |
| `kpiUserPersonalInfo` | GET | `/api/efficiency/key-performance-indicators/user-personal-info` | `efficiency.json` | Персональные KPI пользователя |
| `kpiAllUsersIndicators` | GET | `/api/efficiency/key-performance-indicators/user-indicators` | `efficiency.json` | KPI всех пользователей |
| `kpiShowUserIndicator` | GET | `/api/efficiency/key-performance-indicators/user-indicator/{indicator}` | `efficiency.json` | Показатель пользователя |
| `kpiShowUserIndicatorByUser` | GET | `/api/efficiency/key-performance-indicators/user-indicator/{user}/{indicator}` | `efficiency.json` | Показатель пользователя по user id |
| `kpiEditUserIndicator` | GET | `/api/efficiency/key-performance-indicators/user-indicator/{indicator}/edit` | `efficiency.json` | Форма редактирования показателя пользователя |
| `kpiUpdateUserIndicator` | POST | `/api/efficiency/key-performance-indicators/user-indicator/{indicator}/update` | `efficiency.json` | Обновление показателя пользователя |
| `kpiAssignToUserForm` | GET | `/api/efficiency/key-performance-indicators/user-indicator/assign/{user}` | `efficiency.json` | Форма назначения KPI пользователю |
| `kpiAssignToUser` | POST | `/api/efficiency/key-performance-indicators/user-indicator/assign/{user}` | `efficiency.json` | Назначение KPI пользователю |
| `kpiUserDynamics` | GET | `/api/efficiency/key-performance-indicators/user-dynamics/{user}` | `efficiency.json` | Динамика KPI пользователя |
| `performanceReviewIndex` | GET | `/api/efficiency/performance-reviews` | `efficiency.json` | Список performance review |
| `performanceReviewStore` | POST | `/api/efficiency/performance-reviews` | `efficiency.json` | Создание |
| `performanceReviewCreateForm` | GET | `/api/efficiency/performance-reviews/create` | `efficiency.json` | Форма создания |
| `performanceReviewShow` | GET | `/api/efficiency/performance-reviews/{performance_review}` | `efficiency.json` | Просмотр |
| `performanceReviewUpdate` | PUT | `/api/efficiency/performance-reviews/{performance_review}` | `efficiency.json` | Обновление |
| `performanceReviewDestroy` | DELETE | `/api/efficiency/performance-reviews/{performance_review}` | `efficiency.json` | Удаление |
| `performanceReviewEdit` | GET | `/api/efficiency/performance-reviews/{performance_review}/edit` | `efficiency.json` | Форма редактирования |
| `performanceReviewCancelFormGlobal` | GET | `/api/efficiency/performance-reviews/cancel` | `efficiency.json` | Форма отмены (глобальная) |
| `performanceReviewExport` | POST | `/api/efficiency/performance-reviews/export` | `efficiency.json` | Экспорт списка |
| `performanceReviewHistory` | GET | `/api/efficiency/performance-reviews/{performanceReview}/history` | `efficiency.json` | История PR пользователя |
| `performanceReviewCopy` | GET | `/api/efficiency/performance-reviews/{performanceReview}/copy` | `efficiency.json` | Копирование |
| `performanceReviewCancelForm` | GET | `/api/efficiency/performance-reviews/{performanceReview}/cancel` | `efficiency.json` | Форма отмены |
| `performanceReviewSetCanceled` | POST | `/api/efficiency/performance-reviews/{performanceReview}/cancel` | `efficiency.json` | Отмена PR |
| `performanceReviewCompleteForm` | GET | `/api/efficiency/performance-reviews/{performanceReview}/complete` | `efficiency.json` | Форма завершения |
| `performanceReviewSetCompleted` | POST | `/api/efficiency/performance-reviews/{performanceReview}/complete` | `efficiency.json` | Завершение PR |
| `performanceReviewDeclineParticipation` | POST | `/api/efficiency/performance-reviews/{performanceReview}/decline` | `efficiency.json` | Отказ от участия |
| `performanceReviewEventData` | GET | `/api/efficiency/performance-reviews/{performanceReview}/event-data` | `efficiency.json` | Данные события календаря |
| `performanceReviewGetTabs` | GET | `/api/efficiency/performance-reviews/{performanceReview}/get-tabs` | `efficiency.json` | Вкладки карточки |
| `performanceReviewDashboard` | GET | `/api/efficiency/performance-reviews/{performanceReview}/dashboard` | `efficiency.json` | Дашборд PR |
| `performanceReviewDashboardCompetencies` | GET | `/api/efficiency/performance-reviews/{performanceReview}/competencies` | `efficiency.json` | Дашборд: компетенции |
| `performanceReviewDashboardOneOnOne` | GET | `/api/efficiency/performance-reviews/{performanceReview}/one-on-one` | `efficiency.json` | Дашборд: one-on-one |
| `performanceReviewDashboardEvaluation` | GET | `/api/efficiency/performance-reviews/{performanceReview}/evaluation` | `efficiency.json` | Дашборд: оценка |
| `performanceReviewDashboardEvaluationScore` | GET | `/api/efficiency/performance-reviews/{performanceReview}/evaluation-score` | `efficiency.json` | Дашборд: балл оценки |
| `performanceReviewDashboardObjectives` | GET | `/api/efficiency/performance-reviews/{performanceReview}/objectives` | `efficiency.json` | Дашборд: цели |
| `performanceReviewDashboardPdp` | GET | `/api/efficiency/performance-reviews/{performanceReview}/pdp` | `efficiency.json` | Дашборд: ИПР |
| `performanceReviewNotesIndex` | GET | `/api/efficiency/performance-reviews/{performance_review}/performance-review-notes` | `efficiency.json` | Заметки PR |
| `performanceReviewNotesStore` | POST | `/api/efficiency/performance-reviews/{performance_review}/performance-review-notes` | `efficiency.json` | Создание заметки |
| `performanceReviewNotesCreate` | GET | `/api/efficiency/performance-reviews/{performance_review}/performance-review-notes/create` | `efficiency.json` | Форма создания заметки |
| `performanceReviewNotesEdit` | GET | `/api/efficiency/performance-review-notes/{performance_review_note}/edit` | `efficiency.json` | Форма редактирования заметки |
| `performanceReviewNotesUpdate` | PUT | `/api/efficiency/performance-review-notes/{performance_review_note}` | `efficiency.json` | Обновление заметки |
| `performanceReviewNotesDestroy` | DELETE | `/api/efficiency/performance-review-notes/{performance_review_note}` | `efficiency.json` | Удаление заметки |
| `performanceReviewCommentsIndex` | GET | `/api/efficiency/performance-reviews/{performance_review}/performance-review-comments` | `efficiency.json` | Комментарии PR |
| `performanceReviewCommentsStore` | POST | `/api/efficiency/performance-reviews/{performance_review}/performance-review-comments` | `efficiency.json` | Создание комментария |
| `performanceReviewCommentsUpdate` | PUT | `/api/efficiency/performance-review-comments/{performance_review_comment}` | `efficiency.json` | Обновление комментария |
| `performanceReviewCommentsDestroy` | DELETE | `/api/efficiency/performance-review-comments/{performance_review_comment}` | `efficiency.json` | Удаление комментария |
| `search` | GET | `/api/search` | `efficiency.json` | Поиск по сайту |
| `searchArticle` | GET | `/api/settings/competency-materials/search-article` | `efficiency.json` | Поиск по статьям |
| `searchCourse` | GET | `/api/settings/competency-materials/search-course` | `efficiency.json` | Поиск по курсам |
| `getUserTasks` | GET | `/api/users/get-user-tasks` | `efficiency.json` | Список задач c фильтрацией |
| `rankByPosition` | GET | `/api/settings/positions/get-ranks` | `efficiency.json` | Получение разрядов должности |
| `getCompetencies` | GET | `/api/settings/competencies/get-competencies` | `efficiency.json` | Получить компетенции |
| `getIndicators` | GET | `/api/settings/competencies/get-indicators` | `efficiency.json` | Получить индикаторы компетенции |
| `searchPosition` | GET | `/api/settings/evaluation-template-type/search-position` | `efficiency.json` | Список должностей |
| `getEfficiencyTemplates` | GET | `/api/efficiency/get-templates` | `efficiency.json` | Получить список шаблонов |
| `getIntergartionAreas` | GET | `/api/recruitment/get-areas` | `efficiency.json` | Получить список городов для интеграции |
| `getIntergartionAvitoProfessions` | GET | `/api/recruitment/get-professions` | `efficiency.json` | Получить список профессий Авито для интеграции |
| `searchCountry` | GET | `/api/settings/search-country` | `efficiency.json` | Список стран |
| `searchTimeZone` | GET | `/api/settings/search-time-zone` | `efficiency.json` | Список часовых поясов |
| `searchLocation` | GET | `/api/calendars/search-location` | `efficiency.json` | Список мест проведения |
| `searchSpeakerTrainig` | GET | `api/education/search-speaker` | `efficiency.json` | Список докладчиков Тренинга |
| `searchCandidate` | GET | `/api/settings/search-candidate` | `efficiency.json` | Список кандидатов |
| `searchVacancyCheckLists` | GET | `api/recruitment/vacancies/{vacancy}/search-check-list` | `efficiency.json` | Список чек-листов по вакансии |
| `searchClassifierCode` | GET | `/api/settings/edms/search-classifier-code` | `efficiency.json` | Список кодов классификатора Минтруда |
| `searchUser` | GET | `/api/users/search-user` | `efficiency.json` | Список пользователей |
| `searchUserUdsByFilter` | POST | `/api/users/get-users-ids-by-filter` | `efficiency.json` | Список идентификаторов пользователей по фильтру |
| `searchDepartment` | GET | `/api/settings/departments/get-departments` | `efficiency.json` | Список подразделений |
| `searchVacancy` | GET | `/api/recruitment/app/search-vacancy` | `efficiency.json` | Список вакансий |
| `searchRole` | GET | `/api/settings/search-role` | `efficiency.json` | Список ролей |
| `storeAccrualTypes` | POST | `/api/1c-exchange/types-accruals` | `exchange1c.json` | Сохранение типов начислений |
| `userAccruals` | POST | `/api/1c-exchange/user-accruals` | `exchange1c.json` | Сохранение начислений сотрудников |
| `checkExchange1_` | GET | `/api/1c-exchange/check` | `exchange1c.json` | Проверка доступности обмена со стороны МК |
| `op_1cExchangeUsersProperties` | POST | `/api/1c-exchange/user-properties` | `exchange1c.json` | Загрузка справочников для сотрудников |
| `op_1cExchangeDepartmentList` | POST | `/api/1c-exchange/department-list` | `exchange1c.json` | Загрузка структуры отделов |
| `op_1cExchangeUserList` | POST | `/api/1c-exchange/user-list` | `exchange1c.json` | Загрузка сотрудников |
| `op_1cExchangeUserListResult` | GET | `/api/1c-exchange/user-list/result/{result}` | `exchange1c.json` | Результат загрузки сотрудников |
| `op_1cExchangeUserPayInfoUpload` | POST | `/api/1c-exchange/pay-list/upload` | `exchange1c.json` | Загрузка расчетных листов сотрудников |
| `op_1cExchangeUserPayInfo` | POST | `/api/1c-exchange/pay-list` | `exchange1c.json` | Загрузка информации о расчетных листках сотрудников |
| `op_1cExchangeUserVacationBalance` | POST | `/api/1c-exchange/balance` | `exchange1c.json` | Загрузка информации об остатках отпуска сотрудников |
| `op_1cExchangeAbsenceList` | POST | `/api/1c-exchange/absence-list` | `exchange1c.json` | Загрузка информации об отсутствиях сотрудников |
| `exchange1CApplicationsIndex` | POST | `/api/1c-exchange/edms/applications` | `exchange1c.json` | Список заявок для обмена с 1С |
| `exchange1CApplicationsUpdateStatus` | POST | `/api/1c-exchange/edms/applications/update-status` | `exchange1c.json` | Обновить статус подписания заявления из 1С |
| `exchange1CApplicationsMarkExported` | POST | `/api/1c-exchange/edms/applications/mark-exported` | `exchange1c.json` | Отметить заявки как экспортированные в 1С |
| `exchange1CTemplatesList` | GET | `/api/1c-exchange/edms/templates-list` | `exchange1c.json` | Список шаблонов заявок |
| `exchange1CDocumentsList` | POST | `/api/1c-exchange/edms/documents-list` | `exchange1c.json` | Список документов для обмена с 1С |
| `exchange1CDocumentDetail` | GET | `/api/1c-exchange/edms/documents/{document}/detail` | `exchange1c.json` | Детальная документа |
| `exchange1CDocumentsDestroy` | DELETE | `/api/1c-exchange/edms/documents/{document}` | `exchange1c.json` | Удаление документа |
| `exchange1CDocumentsDelegateUsersList` | GET | `/api/1c-exchange/edms/documents/delegate/users-list` | `exchange1c.json` | Список пользователей для делегирования |
| `exchange1CDocumentsDelegate` | POST | `/api/1c-exchange/edms/documents/delegate` | `exchange1c.json` | Делегирование документа |
| `exchange1CDocumentsSign` | POST | `/api/1c-exchange/edms/documents/sign` | `exchange1c.json` | Подписание документа УКЭП |
| `exchange1CDocumentsReject` | POST | `/api/1c-exchange/edms/documents/reject` | `exchange1c.json` | Отклонение подписания документа |
| `exchange1CDocumentsRemind` | POST | `/api/1c-exchange/edms/documents/remind` | `exchange1c.json` | Напоминание о подписании |
| `exchange1CDocumentsMarkExported` | POST | `/api/1c-exchange/edms/documents/mark-exported` | `exchange1c.json` | Отметить документы как экспортированные в 1С |
| `checkExchangeEDMS1_` | GET | `/api/1c-exchange/edms/check` | `exchange1c.json` | Проверка доступности КЭДО на стороне МК |
| `op_1cExchangeDocumentsUpload` | POST | `/api/1c-exchange/edms/documents/upload` | `exchange1c.json` | Загрузка документов сотрудников |
| `op_1cExchangeDocumentList` | POST | `/api/1c-exchange/edms/documents` | `exchange1c.json` | Загрузка информации о документах сотрудников |
| `op_1cExchangeDocumentTypesList` | GET | `/api/1c-exchange/edms/document-types-list` | `exchange1c.json` | Список типов документов из МояКоманда |
| `op_1cExchangeDocumentType1CsList` | GET | `/api/1c-exchange/edms/document-types-1c-list` | `exchange1c.json` | Справочник Виды документов 1С |
| `op_1cExchangeDeleteDocuments` | POST | `/api/1c-exchange/edms/delete-documents` | `exchange1c.json` | Перевод документов в статус Недействителен |
| `op_1cExchangeUsersConsents` | POST | `/api/1c-exchange/edms/users-consents` | `exchange1c.json` | Согласие пользователей о работе с КЭДО |
| `op_1cExchangeDocumentsStatuses` | POST | `/api/1c-exchange/edms/documents-statuses` | `exchange1c.json` | Получение статусов документов |
| `gamificationAccrualHistory` | GET | `/api/prize-store/accrual-history` | `gamification.json` | История начислений пользователя |
| `gamificationAccrualHistoryExport` | POST | `/api/prize-store/accrual-history/export` | `gamification.json` | Экспорт данных из истории начислений в магазине |
| `gamificationHistoryAccrualUsers` | GET | `/api/settings/gamification/users/accrual` | `gamification.json` | Начисление пользователям |
| `gamificationAccrualUsers` | POST | `/api/settings/gamification/users/accrual` | `gamification.json` | Обновление баланса |
| `gamificationFormShareCoinlUsers` | GET | `/api/users/{user}/share-coins` | `gamification.json` | Форма передачи монет пользователям |
| `gamificationShareCoinlUsers` | POST | `/api/users/share-coins` | `gamification.json` | Передача монет пользователя |
| `gamificationCart` | GET | `/api/prize-store/cart` | `gamification.json` | Корзина пользователя |
| `gamificationCartStore` | POST | `/api/prize-store/cart` | `gamification.json` | Добавление товара в корзину |
| `gamificationCartItemDel` | POST | `/api/prize-store/cart/delete-item` | `gamification.json` | Удаление товара из корзины |
| `gamificationCartClear` | GET | `/api/prize-store/cart/clear` | `gamification.json` | Очистка Корзины пользователя |
| `cleverestQuestionAttemptsList` | POST | `/api/settings/cleverest/attempts` | `gamification.json` | Список попыток |
| `cleverestQuestionAttemptsDestroy` | DELETE | `/api/settings/cleverest/attempts/{attempt}` | `gamification.json` | Удаление попытки |
| `cleverestQuestions` | GET | `/api/settings/cleverest/groups/{group}/questions` | `gamification.json` | Список вопросов |
| `cleverestQuestionStore` | POST | `/api/settings/cleverest/groups/{group}/questions` | `gamification.json` | Создание вопроса |
| `cleverestQuestionCreate` | GET | `/api/settings/cleverest/groups/{group}/question-type/{type}/create` | `gamification.json` | Форма создания вопроса |
| `cleverestQuesctionEdit` | GET | `/api/settings/cleverest/questions/{question}/edit` | `gamification.json` | Форма редактирования вопроса |
| `cleverestQuesctionUpdate` | PUT | `/api/settings/cleverest/questions/{question}` | `gamification.json` | Обновление вопроса |
| `cleverestQuestionDelete` | DELETE | `/api/settings/cleverest/questions/{question}` | `gamification.json` | Удаление вопроса |
| `cleverestQuestionCopyForm` | GET | `/api/settings/cleverest/questions/{question}/copy-form` | `gamification.json` | Форма копирования вопроса |
| `cleverestQuestionCopy` | POST | `/api/settings/cleverest/questions/{question}/copy` | `gamification.json` | Копирование вопроса |
| `cleverestQuestionUpdateStatus` | POST | `/api/cleverest/questions/{question}/update-status` | `gamification.json` | Смена статуса вопроса |
| `getDashboardCleverest` | GET | `/api/cleverest/dashboard` | `gamification.json` | Вывод дашборда игры |
| `getDashboardDatailCleverest` | GET | `/api/cleverest/dashboard/rating` | `gamification.json` | Вывод дашборда игры |
| `dashboardStartGameCleverest` | POST | `/api/cleverest/dashboard/start-game` | `gamification.json` | Старт игры в дашборде |
| `dashboardGetQuestionCleverest` | GET | `/api/cleverest/dashboard/question/{question}/get-question` | `gamification.json` | Вопрос в дашборде |
| `dashboardSetAnswerCleverest` | PUT | `/api/cleverest/dashboard/question/{question}/set-answer` | `gamification.json` | Дать ответ на вопрос в дашборде |
| `dashboardFinishGameCleverest` | POST | `/api/cleverest/dashboard/finish-game` | `gamification.json` | Завершение игры |
| `cleverestQuestionGroupList` | GET | `/api/settings/cleverest/groups` | `gamification.json` | Список групп |
| `cleverestQuestionGroupStore` | POST | `/api/settings/cleverest/groups` | `gamification.json` | Создание группы |
| `cleverestQuestionGroupGroupCreate` | GET | `/api/settings/cleverest/groups/create` | `gamification.json` | Поля для формы создания группы |
| `cleverestQuestionGroupEdit` | GET | `/api/settings/cleverest/{group}/edit` | `gamification.json` | Поля для формы редактирования группы |
| `cleverestQuestionGroupUpdate` | PUT | `/api/settings/cleverest/{group}` | `gamification.json` | Обновление группы |
| `cleverestQuestionGroupDestroy` | DELETE | `/api/settings/cleverest/groups/{group}` | `gamification.json` | Удаление группы |
| `cleverestQuestionGroupListUsers` | GET | `/api/settings/cleverest/groups/{group}/list-users` | `gamification.json` | Список пользователей |
| `cleverestQuestionGroupUpdateStatus` | POST | `/api/settings/cleverest/groups/{group}/update-status` | `gamification.json` | Смена статуса группы |
| `questions` | GET | `/api/settings/daily-question/{group}/questions` | `gamification.json` | Список вопросов дня |
| `questionCreate` | GET | `/api/settings/daily-question/{group}/questions/create` | `gamification.json` | Форма создания вопроса |
| `dailyQuesctionStore` | POST | `/api/settings/daily-question/questions` | `gamification.json` | Создание вопроса |
| `dailyQuesctionEdit` | GET | `/api/settings/daily-question/questions/{question}/edit` | `gamification.json` | Форма редактирования вопроса |
| `dailyQuesctionUpdate` | PUT | `/api/settings/daily-question/questions/{question}` | `gamification.json` | Обновление вопроса |
| `dailyQuestionDelete` | DELETE | `/api/settings/daily-question/questions/{question}` | `gamification.json` | Удаление вопроса |
| `dailyQuestionsSort` | POST | `/api/settings/daily-questions/groups/{group}/questions-sort` | `gamification.json` | Сортировка вопросов |
| `dailyQuestionCopy` | POST | `/api/settings/daily-questions/{question}/copy` | `gamification.json` | Копирование вопроса |
| `dailyQuestionSetStatus` | POST | `/api/settings/daily-question/questions/{question}/status` | `gamification.json` | Смена статуса вопроса |
| `getDashboardQuestion` | GET | `/api/daily-question/{user}/dashboard/question` | `gamification.json` | Вывод вопроса дня в дашборд |
| `setAnswer` | POST | `/api/daily-question/dashboard/question` | `gamification.json` | Отправка ответа на вопрос дня |
| `groupList_api_settings_daily_question` | GET | `/api/settings/daily-question` | `gamification.json` | Список групп |
| `dailyQuestionGroupCreate` | GET | `/api/settings/daily-question/create` | `gamification.json` | Поля для формы создания группы |
| `groupStore_api_settings_daily_question_group` | POST | `/api/settings/daily-question/group` | `gamification.json` | Создание группы |
| `groupEdit_api_settings_daily_question_group_edit` | GET | `/api/settings/daily-question/{group}/edit` | `gamification.json` | Поля для формы редактирования группы |
| `groupUpdate_api_settings_daily_question_group` | PUT | `/api/settings/daily-question/{group}` | `gamification.json` | Обновление группы |
| `groupDestroy_api_settings_daily_question_group` | DELETE | `/api/settings/daily-question/{group}` | `gamification.json` | Удаление группы |
| `groupListUsers_api_settings_daily_question_groups_group_list_users` | GET | `/api/settings/daily-question/groups/{group}/list-users` | `gamification.json` | Список пользователей |
| `gamificationSettingsStore` | GET | `/api/settings/gamification/store/items` | `gamification.json` | Список товаров магазина в настройках. |
| `gamificationStoreItemStore` | POST | `/api/settings/gamification/store/items` | `gamification.json` | Создание товара |
| `gamificationStoreItemCreate` | GET | `/api/settings/gamification/store/items/create` | `gamification.json` | Поля для формы создания товара |
| `gamificationStoreItemEdit` | GET | `/api/settings/gamification/store/items/{item}/edit` | `gamification.json` | Редактирование товара |
| `gamificationStoreItemUpdate` | PUT | `/api/settings/gamification/store/items/{item}` | `gamification.json` | Обновление товара |
| `gamificationStoreItemDelete` | DELETE | `/api/settings/gamification/store/items/{item}` | `gamification.json` | Удаление товара |
| `gamificationStore` | GET | `/api/prize-store` | `gamification.json` | Список товаров магазина в магазине. |
| `gamificationStoreItemStatusUpdate` | PUT | `/api/settings/gamification/store/items/{item}/active` | `gamification.json` | Обновление активности товара |
| `prizeStoreGetTabs` | GET | `/api/prize-store/get-tabs` | `gamification.json` | Получение доступных вкладок Магазина |
| `gamificationOrdersUser` | GET | `/api/prize-store/order-history` | `gamification.json` | Заказы пользователя |
| `gamificationOrderUsers` | GET | `/api/prize-store/employees-order` | `gamification.json` | Заказы всех пользователей |
| `gamificationOrderStore` | POST | `/api/prize-store/order` | `gamification.json` | Создание Заказа |
| `gamificationOrderStoreEdit` | GET | `/api/prize-store/order/{order}/edit` | `gamification.json` | Редактирование Заказа |
| `gamificationOrderUser` | GET | `/api/prize-store/order/{order}` | `gamification.json` | Заказ пользователя |
| `gamificationOrderUpdate` | PUT | `/api/prize-store/order/{order}` | `gamification.json` | Обновление Заказа |
| `gamificationOrderReject` | GET | `/api/prize-store/order/{order}/reject` | `gamification.json` | Отмена Заказа |
| `gamificationRatingSettings` | GET | `/api/settings/gamification/settings-rating` | `gamification.json` | Настройки рейтинга |
| `gamificationRatingSettingsUpdate` | POST | `/api/settings/gamification/settings-rating` | `gamification.json` | Настройки рейтинга |
| `gamificationAccrualRatingSettings` | GET | `/api/settings/gamification/auto-accrual` | `gamification.json` | Настройки начислений рейтинга |
| `gamificationAccrualRatingSettingsUpdate` | POST | `/api/settings/gamification/auto-accrual` | `gamification.json` | Настройка начислений рейтинга |
| `ratingMain` | GET | `/api/main-page/dashboard/rating` | `gamification.json` | Дашборд -Рейтинг |
| `gamificationRatingTab` | GET | `/api/tabs-rating` | `gamification.json` | Рейтинг табы |
| `gamificationRating` | GET | `/api/rating` | `gamification.json` | Рейтинг сводная таблица |
| `gamificationRatingActivities` | GET | `/api/rating-activities` | `gamification.json` | Рейтинг по активностям |
| `deleteRatingActivities` | DELETE | `/api/rating-activities` | `gamification.json` | Рейтинг по активностям - удаление |
| `gamificationRatingEducation` | GET | `/api/rating-education` | `gamification.json` | Рейтинг по обучению |
| `deleteatingEducation` | DELETE | `/api/rating-education` | `gamification.json` | Рейтинг по обучению - удаление |
| `gamificationRatingAccrual` | GET | `/api/rating-accrual` | `gamification.json` | Рейтинг - статистика начислений |
| `gamificationRatingAccrualExport` | POST | `/api/rating-accrual/export` | `gamification.json` | Экспорт данных из истории начислений баллов |
| `thanksCreate` | GET | `/api/users/thanks/create` | `gamification.json` | Форма создания благодарности |
| `thanksEdit` | GET | `/api/thanks/{thanks}/edit` | `gamification.json` | Форма редактирования Благодарность |
| `thanksUserList` | GET | `/api/users/{user}/thanks` | `gamification.json` | Получение списка Благодарностей пользователя |
| `thanksStore` | POST | `/api/users/{user}/thanks` | `gamification.json` | Сохранение новой Благодарности |
| `thanksShow` | GET | `/api/thanks/{thanks}` | `gamification.json` | Показ детальной Благодарности |
| `thanksUpdate` | PUT | `/api/users/{user}/thanks/{thanks}` | `gamification.json` | Обновление Благодарности |
| `thanksDestroy` | DELETE | `/api/users/{user}/thanks/{thanks}` | `gamification.json` | Удаление Благодарности |
| `thanksShortUserList` | GET | `/api/users/{user}/thanks-short` | `gamification.json` | Получение краткого списка Благодарностей пользователя |
| `getThanksList` | GET | `/api/settings/thanks/thanks-list` | `gamification.json` | Получение списка благодарностей |
| `getCreateThanksForm` | GET | `/api/settings/thanks/create-thanks` | `gamification.json` | Получение формы создания благодарности |
| `storeThanks` | POST | `/api/settings/thanks/store-thanks` | `gamification.json` | Создание новой благодарности |
| `getEditThanksForm` | GET | `/api/settings/thanks/{thanks}/edit-thanks` | `gamification.json` | Получение формы редактирования благодарности |
| `updateThanks` | PUT | `/api/settings/thanks/{thanks}/save-edited-thanks` | `gamification.json` | Обновление благодарности |
| `deleteThanks` | DELETE | `/api/settings/thanks/{thanks}/delete-thanks` | `gamification.json` | Удаление благодарности |
| `publishThanks` | PUT | `/api/settings/thanks/{thanks}/publish` | `gamification.json` | Изменение статуса публикации благодарности |
| `ideaCommentStore` | POST | `/api/idea/{idea}/comments` | `idea.json` | Оставить комментарий |
| `ideaCommentEdit` | GET | `/api/idea-comments/{comment}/edit` | `idea.json` | Поля для редактирования комментария |
| `ideaCommentUpdate` | PUT | `/api/idea-comments/{comment}` | `idea.json` | Обновить комментарий |
| `ideaCommentDestroy` | DELETE | `/api/idea-comments/{comment}` | `idea.json` | Удалить комментарий |
| `op_1e4458d2c14d1e9cdd5fa5635ed1c589` | POST | `/api/idea-comments/{comment}/send-reaction` | `idea.json` | Добавление реакции на комментарий |
| `op_01b0fffd113e33e7ed130f2725062766` | GET | `/api/idea-comments/{comment}/count-reactions` | `idea.json` | Получение количества реакций на комментарий |
| `a14fc174f06363bbed86ed56548e01dc` | GET | `/api/v2/idea/{idea}/comments` | `idea.json` | Получение списка комментариев к идее |
| `b5a7bb70de5d3edde2e851a6c9569a65` | POST | `/api/v2/idea/{idea}/comments` | `idea.json` | Добавление комментария к идее |
| `op_32c8cf2adac2dda8cfa6fcaf3555b6c0` | GET | `/api/v2/idea-comments/{comment}/edit` | `idea.json` | Получение данных для редактирования комментария |
| `ff59cb6f523bbc755d66be15a391bb37` | PUT | `/api/v2/idea-comments/{comment}` | `idea.json` | Обновление комментария и получение обновленного списка |
| `ca63dbe357319be7d2faad8cec933009` | DELETE | `/api/v2/idea-comments/{comment}` | `idea.json` | Удаление комментария и получение обновленного списка |
| `ideaCreate` | GET | `/api/idea/create` | `idea.json` | Форма создания новой идеи |
| `ideaEdit` | GET | `/api/idea/{idea}/edit` | `idea.json` | Форма редактирования идеи |
| `ideaStore` | POST | `/api/idea` | `idea.json` | Сохранение новой идеи |
| `oneOnOneShow_api_idea_idea` | GET | `/api/idea/{idea}` | `idea.json` | Показ детальной страницы идеи |
| `ideaUpdate` | PUT | `/api/idea/{idea}` | `idea.json` | Обновление идеи |
| `ideaDestroy` | DELETE | `/api/idea/{idea}` | `idea.json` | Удаление идеи |
| `ideaChangeStage` | PUT | `/api/idea/change-stage/{idea}` | `idea.json` | Обновление стидии идеи |
| `sortIdeas` | POST | `/api/idea/sort-ideas` | `idea.json` | Сортировка идей в рамках стадий |
| `ideasList` | GET | `/api/ideas-list` | `idea.json` | Получение списка идей |
| `ideasStageList` | GET | `/ideas/stage/{stage}` | `idea.json` | Получение списка идей этапа |
| `ideasListExport` | POST | `/api/ideas-list/export` | `idea.json` | Экспорт списка идей |
| `ideaStoreLike` | POST | `/api/idea/{idea}/send-reaction` | `idea.json` | Отправить реакцию на идею (лайк или дизлайк) |
| `knowledgeBaseAcrticleCommentStore` | POST | `/api/knowledge-base/articles/{article}/send-comment` | `knowledge-base.json` | Оставить комментарий |
| `knowledgeBaseAcrticleCommentEdit` | GET | `/api/knowledge-base/comments/{comment}/edit` | `knowledge-base.json` | Поля для редактирования комментария |
| `knowledgeBaseAcrticleCommentUpdate` | PUT | `/api/knowledge-base/comments/{comment}` | `knowledge-base.json` | Обновить комментарий |
| `knowledgeBaseAcrticleCommentDestroy` | DELETE | `/api/knowledge-base/comments/{comment}` | `knowledge-base.json` | Удалить комментарий |
| `e292128278345d610800696cbf31180f` | POST | `/api/v2/knowledge-base/articles/{article}/send-comment` | `knowledge-base.json` | Добавление комментария |
| `op_2c5a4c70e9ea35eaad060281e4359feb` | GET | `/api/v2/knowledge-base/comments/{comment}/edit` | `knowledge-base.json` | Получение данных для редактирования комментария |
| `op_3b3094e5291435c360fcfd57c478835a` | PUT | `/api/v2/knowledge-base/comments/{comment}` | `knowledge-base.json` | Обновление комментария и получение обновленного списка |
| `d5078760c76d79e93f6fca0fa6ef58cf` | DELETE | `/api/v2/knowledge-base/comments/{comment}` | `knowledge-base.json` | Удаление комментария и получение обновленного списка |
| `op_670a565689661e7ae503499785e51caa` | GET | `/api/v2/knowledge-base/articles/{article}/comments` | `knowledge-base.json` | Получение списка комментариев к базе знаний |
| `knowledgeBaseDetail` | GET | `/api/knowledge-base/articles/{article}` | `knowledge-base.json` | Детальная статьи |
| `knowledgeBaseUpdate` | PUT | `/api/knowledge-base/articles/{article}` | `knowledge-base.json` | Обновление статьи |
| `knowledgeBaseUpdateDestroy` | DELETE | `/api/knowledge-base/articles/{article}` | `knowledge-base.json` | Удаление статьи |
| `knowledgeBaseCreate` | POST | `/api/knowledge-base/groups/add-article` | `knowledge-base.json` | Поля для создания статьи |
| `knowledgeBaseStore` | POST | `/api/knowledge-base/articles` | `knowledge-base.json` | Создание статьи |
| `knowledgeBaseEdit` | GET | `/api/knowledge-base/articles/{article}/edit` | `knowledge-base.json` | Редактирование статьи |
| `knowledgeBaseSearch` | GET | `/api/knowledge-base/search` | `knowledge-base.json` | Поиск статьи |
| `userCountWithFilterForArticle` | POST | `/api/knowledge-base/groups/{group}/count-with-filter` | `knowledge-base.json` | Количество пользователей |
| `knowledgeBaseFileDestroy` | DELETE | `/api/knowledge-base/files/{file}` | `knowledge-base.json` | Удаление файла статьи |
| `knowledgeBaseStoreLike` | POST | `/api/knowledge-base/articles/{article}/send-reaction` | `knowledge-base.json` | Отправить реакцию на статью (лайк или дизлайк) |
| `uniqueUsers` | GET | `/api/knowledge-base/articles/{article}/get-users` | `knowledge-base.json` | Количество уникальных просмотров пользователей |
| `knowledgeBaseGroup` | GET | `/api/knowledge-base/groups` | `knowledge-base.json` | Список категорий |
| `knowledgeBaseGroupStore` | POST | `/api/knowledge-base/groups` | `knowledge-base.json` | Создание категории |
| `knowledgeBaseGroupCreate` | GET | `/api/knowledge-base/groups/create` | `knowledge-base.json` | Поля для создания категории |
| `knowledgeBaseGroupEdit` | GET | `/api/knowledge-base/groups/{group}/edit` | `knowledge-base.json` | Поля для редактирования категории |
| `knowledgeBaseInGroup` | GET | `/api/knowledge-base/groups/{group}` | `knowledge-base.json` | Список статей по категории |
| `knowledgeBaseGroupUpdate` | PUT | `/api/knowledge-base/groups/{group}` | `knowledge-base.json` | Обновление категории |
| `knowledgeBaseGroupDestroy` | DELETE | `/api/knowledge-base/groups/{group}` | `knowledge-base.json` | Удаление категории |
| `knowledgeBaseGroupSort` | PUT | `/api/knowledge-base/groups-sort` | `knowledge-base.json` | Сортировка категорий |
| `knowledgeBaseInGroupByTags` | POST | `/api/knowledge-base/groups/{group}/article-by-tags` | `knowledge-base.json` | Список статей в категории по тегам |
| `knowledgeBaseByTags` | POST | `/api/knowledge-base/groups/article-by-tags` | `knowledge-base.json` | Список статей во всех категориях по тегам |
| `knowledgeBaseGroupCreateV2` | GET | `/api/v2/knowledge-base/groups/create` | `knowledge-base.json` | Поля для создания категории |
| `knowledgeBaseGroupEditV2` | GET | `/api/v2/knowledge-base/groups/{group}/edit` | `knowledge-base.json` | Поля для редактирования категории |
| `knowledgeBaseInGroupV2` | GET | `/api/v2/knowledge-base/groups/{group}` | `knowledge-base.json` | Список статей по категории |
| `knowledgeBaseGroupUpdateV2` | PUT | `/api/v2/knowledge-base/groups/{group}` | `knowledge-base.json` | Обновление категории |
| `knowledgeBaseGroupDestroyV2` | DELETE | `/api/v2/knowledge-base/groups/{group}` | `knowledge-base.json` | Удаление категории |
| `f7058d5d71ebf23a6e12ae4425282aee` | POST | `/api/v2/knowledge-base/articles/{article}/comments/{comment}/send-reaction` | `knowledge-base.json` | Добавление реакции на комментарий |
| `op_925f04945375ab8f3dbe9a13cd140778` | GET | `/api/v2/knowledge-base/articles/{article}/comments/{comment}/count-reactions` | `knowledge-base.json` | Получение количества реакций на комментарий |
| `knowledgeBaseShowV2` | GET | `/api/v2/knowledge-base/articles/{article}` | `knowledge-base.json` | Детальная страница статьи (версия 2) |
| `knowledgeBaseUpdateV2` | PUT | `/api/v2/knowledge-base/articles/{article}` | `knowledge-base.json` | Обновление статьи (версия 2) |
| `knowledgeBaseCreateV2` | GET | `/api/v2/knowledge-base/articles/create` | `knowledge-base.json` | Поля формы для создания статьи (версия 2) |
| `knowledgeBaseEditV2` | GET | `/api/v2/knowledge-base/articles/{article}/edit` | `knowledge-base.json` | Поля формы для редактирования статьи (версия 2) |
| `knowledgeBaseStoreV2` | POST | `/api/v2/knowledge-base/articles` | `knowledge-base.json` | Создание статьи (версия 2) |
| `tagList` | GET | `/api/knowledge-base/tags` | `knowledge-base.json` | Список тегов |
| `tagStore` | POST | `/api/knowledge-base/tags` | `knowledge-base.json` | Создание тега |
| `tagUpdate_api_knowledge_base_tags` | PUT | `/api/knowledge-base/tags` | `knowledge-base.json` | Обновление тегов |
| `tagCreate` | GET | `/api/knowledge-base/tags/create` | `knowledge-base.json` | Поля для создания тега |
| `tagEdit` | GET | `/api/knowledge-base/tags/{tag}/edit` | `knowledge-base.json` | Редактирование тега |
| `tagUpdateDestroy` | DELETE | `/api/knowledge-base/tags/{tag}` | `knowledge-base.json` | Удаление тега |
| `tagListSort` | PUT | `/api/knowledge-base/tags-sort` | `knowledge-base.json` | Сортировка тегов |
| `dashboardMyActivities` | GET | `/api/main-page/activities` | `main-page.json` | Дашборд мои активности |
| `acrticleCommentStore` | POST | `/api/news/{article}/comments` | `main-page.json` | Оставить комментарий |
| `acrticleCommentEdit` | GET | `/api/article-comments/{comment}/edit` | `main-page.json` | Поля для редактирования комментария |
| `acrticleCommentUpdate` | PUT | `/api/article-comments/{comment}` | `main-page.json` | Обновить комментарий |
| `acrticleCommentDestroy` | DELETE | `/api/article-comments/{comment}` | `main-page.json` | Удалить комментарий |
| `articleCommentEmojiReactionToggle` | POST | `/api/v2/news/comments/{comment}/emoji-reaction` | `main-page.json` | Поставить / снять эмодзи-реакцию на комментарий к статье пульса |
| `articleCommentEmojiReactionEmployeeList` | GET | `/api/v2/news/comments/{comment}/emoji-reactions` | `main-page.json` | Список сотрудников, поставивших эмодзи-реакцию на комментарий к статье пульса |
| `articleCommentReactionAdd` | POST | `/api/news/comments/{comment}/send-reaction` | `main-page.json` | Оставить реакцию на комментарий |
| `articleCommentReactionCountByNews` | GET | `/api/news/comments/{comment}/count-reactions` | `main-page.json` | Список всех сотрудников, оставивших реакцию на комментарий к новости |
| `op_13fd8b60c710ad6aab96ab24fd71f2a5` | GET | `/api/v2/news/{article}/comments` | `main-page.json` | Получение списка комментариев |
| `op_323219be2183b351826a1ce1e6bb114f` | POST | `/api/v2/news/{article}/comments` | `main-page.json` | Добавление комментария |
| `op_12e8b1a03ce3e7fc7d6b8ff2e6ef060d` | GET | `/api/v2/article-comments/{comment}/edit` | `main-page.json` | Получение данных для редактирования комментария |
| `d764f2a28f7fc5d269b78c83985b3c4a` | PUT | `/api/v2/article-comments/{comment}` | `main-page.json` | Обновление комментария и получение обновленного списка |
| `op_716b87ec20805908ed3e97765e2a1634` | DELETE | `/api/v2/article-comments/{comment}` | `main-page.json` | Удаление комментария и получение обновленного списка |
| `acrticleCreate` | GET | `/api/news/create` | `main-page.json` | Форма добавления новости |
| `acrticleStore` | POST | `/api/news` | `main-page.json` | Создание новости |
| `acrticleEdit` | GET | `/api/news/{article}/edit` | `main-page.json` | Редактирование новости |
| `acrticleUpdate` | PUT | `/api/news/{article}` | `main-page.json` | Обновление новости |
| `acrticleDestroy` | DELETE | `/api/news/{article}` | `main-page.json` | Удаление новости |
| `pulseShow` | GET | `/api/pulse/{article}` | `main-page.json` | Детальная поста пульса |
| `acrticleDestroyShort` | DELETE | `/api/short-news/{article}` | `main-page.json` | Удаление новости |
| `newsFeedTogglePin` | POST | `/api/main-page/news/{news_feed}/{scope}/{type}` | `main-page.json` | Закрепление или открепление новости |
| `articleEmojiReactionToggle` | POST | `/api/v2/news/{article}/emoji-reaction` | `main-page.json` | Поставить / снять эмодзи-реакцию на статью пульса |
| `articleEmojiReactionEmployeeList` | GET | `/api/v2/news/{article}/emoji-reactions` | `main-page.json` | Список сотрудников, поставивших эмодзи-реакцию на статью пульса |
| `acrticleReactionAdd` | POST | `/api/news/{article}/reaction` | `main-page.json` | Оставить реакцию на новость |
| `acrticleReactionDestroy` | DELETE | `/api/news/{article}/reaction` | `main-page.json` | Удалить реакцию |
| `acrticleReactionCountByNews` | GET | `/api/news/{article}/count-reactions` | `main-page.json` | Список всех сотрудников оставивших реакцию на новость |
| `companyLinks` | GET | `/api/main-page/company-links` | `main-page.json` | Ссылки компании |
| `companyLinksStore` | POST | `/api/main-page/company-links` | `main-page.json` | Добавление новой ссылки компании |
| `companyLinksCreate` | GET | `/api/main-page/company-links/create` | `main-page.json` | Форма создания ссылки |
| `companyLinksEdit` | GET | `/api/main-page/company-links/{companyLink}/edit` | `main-page.json` | Редактирование ссылки компании |
| `companyLinksUpdate` | PUT | `/api/main-page/company-links/{companyLink}` | `main-page.json` | Обновление ссылки компании |
| `companyLinksDestroy` | DELETE | `/api/main-page/company-links/{companyLink}` | `main-page.json` | Удаление ссылки компании |
| `companyLinksSort` | PUT | `/api/main-page/company-links/` | `main-page.json` | Сортировка ссылок компании |
| `absences` | GET | `/api/main-page/absences` | `main-page.json` | Информация по типам отсутствий |
| `whoIsAbsent` | GET | `/api/main-page/who-is-absent` | `main-page.json` | Информация по отсутствующим |
| `getNewsFeed` | GET | `/api/main-page/news-feed` | `main-page.json` | Получение новостной ленты пульса (МП) |
| `getShortNews` | GET | `/api/short-news` | `main-page.json` | Получение короткой новостной ленты |
| `getCountNews` | GET | `/api/news/count-news` | `main-page.json` | Получение рейтинга авторов для дашборда. |
| `getCountComments` | GET | `/api/news/count-comments` | `main-page.json` | Получение рейтинга  комментаторов |
| `myCalendar` | GET | `/api/main-page/dashboard/my-calendar` | `main-page.json` | Виджет мой календарь |
| `userTasksList` | POST | `/api/main-page/dashboard/my-tasks/{status}` | `main-page.json` | Виджет мои задачи |
| `absenceList` | GET | `/api/main-page/absence` | `main-page.json` | Список отсутствий |
| `myRequests` | GET | `/api/main-page/dashboard/my-request` | `main-page.json` | Список заявок |
| `educationList` | GET | `/api/main-page/dashboard/education` | `main-page.json` | Виджет с моими курсами |
| `bannerMain` | GET | `/api/main-page/dashboard/banner` | `main-page.json` | Баннер |
| `mainPageWidgetScopeOptions` | GET | `/api/main-page/widget-scopes/{widget_code}/options` | `main-page.json` | Варианты области виджета дашборда |
| `mainPageWidgetScopeUpdate` | PUT | `/api/main-page/widget-scopes/{widget_code}` | `main-page.json` | Сохранить область виджета дашборда |
| `memorableDatesList` | GET | `/api/main-page/memorable-dates` | `main-page.json` | Список дней рождения, годовщин и отсутствий |
| `getPosts` | GET | `/api/posts` | `main-page.json` | Получение новостной ленты |
| `postsStore` | POST | `/api/posts` | `main-page.json` | Создание новости |
| `postsCreate` | GET | `/api/posts/create` | `main-page.json` | Форма добавления новости |
| `postsEdit` | GET | `/api/posts/{post}/edit` | `main-page.json` | Редактирование новости |
| `postsShow` | GET | `/api/posts/{post}` | `main-page.json` | Детальная новости |
| `postsUpdate` | PUT | `/api/posts/{post}` | `main-page.json` | Обновление новости |
| `postsDestroy` | DELETE | `/api/posts/{post}` | `main-page.json` | Удаление новости |
| `getShortPosts` | GET | `/api/short-posts` | `main-page.json` | Получение короткой новостной ленты |
| `postsDestroyShort` | DELETE | `/api/short-posts/{post}` | `main-page.json` | Удаление новости |
| `postsStoreShort` | POST | `/api/short-posts/` | `main-page.json` | Создание новости |
| `postsUniqueViews` | GET | `/api/posts/{post}/unique-views` | `main-page.json` | Список уникальных просмотров новости |
| `newsListTogglePin` | POST | `/api/posts/{news_list}/{scope}/{type}` | `main-page.json` | Закрепление или открепление поста |
| `newsSuggestionCommentIndex` | GET | `/api/news-suggestions/{newsSuggestion}/comments` | `main-page.json` | Список комментариев к предложенной новости |
| `newsSuggestionCommentStore` | POST | `/api/news-suggestions/{newsSuggestion}/comments` | `main-page.json` | Добавление комментария к предложенной новости |
| `newsSuggestionCommentUpdate` | PUT | `/api/news-suggestion/comments/{comment}` | `main-page.json` | Обновление комментария к предложенной новости |
| `newsSuggestionCommentDestroy` | DELETE | `/api/news-suggestion/comments/{comment}` | `main-page.json` | Удаление комментария к предложенной новости |
| `newsSuggestionIndex` | GET | `/api/news-suggestions` | `main-page.json` | Список предложенных новостей |
| `newsSuggestionStore` | POST | `/api/news-suggestions` | `main-page.json` | Создание предложенной новости |
| `newsSuggestionCreate` | GET | `/api/news-suggestions/create` | `main-page.json` | Форма создания предложенной новости |
| `newsSuggestionEdit` | GET | `/api/news-suggestions/{newsSuggestion}/edit` | `main-page.json` | Форма редактирования предложенной новости |
| `newsSuggestionShow` | GET | `/api/news-suggestions/{newsSuggestion}` | `main-page.json` | Просмотр предложенной новости |
| `newsSuggestionUpdate` | PUT | `/api/news-suggestions/{newsSuggestion}` | `main-page.json` | Обновление предложенной новости |
| `newsSuggestionDestroy` | DELETE | `/api/news-suggestions/{newsSuggestion}` | `main-page.json` | Удаление предложенной новости |
| `newsSuggestionStartModeration` | POST | `/api/news-suggestions/{newsSuggestion}/start-moderation` | `main-page.json` | Начало модерации предложенной новости |
| `newsSuggestionCancelModeration` | POST | `/api/news-suggestions/{newsSuggestion}/cancel-moderation` | `main-page.json` | Отмена модерации предложенной новости |
| `newsSuggestionPublish` | POST | `/api/news-suggestions/{newsSuggestion}/publish` | `main-page.json` | Публикация предложенной новости |
| `newsSuggestionRejectForm` | GET | `/api/news-suggestions/reject-form` | `main-page.json` | Форма отклонения предложенной новости |
| `newsSuggestionReject` | POST | `/api/news-suggestions/{newsSuggestion}/reject` | `main-page.json` | Отклонение предложенной новости |
| `newsSuggestionGetHistory` | GET | `/api/news-suggestions/{newsSuggestion}/history` | `main-page.json` | История предложенной новости |
| `onboardingMainPageList` | GET | `/api/main-page/onboardings` | `main-page.json` | Список онбордингов пользователя |
| `postCommentStore` | POST | `/api/post/{post}/comments` | `main-page.json` | Оставить комментарий |
| `postCommentEdit` | GET | `/api/post-comments/{comment}/edit` | `main-page.json` | Поля для редактирования комментария |
| `postCommentUpdate` | PUT | `/api/post-comments/{comment}` | `main-page.json` | Обновить комментарий |
| `postCommentDestroy` | DELETE | `/api/post-comments/{comment}` | `main-page.json` | Удалить комментарий |
| `postCommentEmojiReactionToggle` | POST | `/api/v2/post/comments/{comment}/emoji-reaction` | `main-page.json` | Поставить / снять эмодзи-реакцию на комментарий к посту |
| `postCommentEmojiReactionEmployeeList` | GET | `/api/v2/post/comments/{comment}/emoji-reactions` | `main-page.json` | Список сотрудников, поставивших эмодзи-реакцию на комментарий к посту |
| `postCommentReactionAdd` | POST | `/api/post/comments/{comment}/send-reaction` | `main-page.json` | Оставить реакцию на комментарий |
| `postCommentReactionCountByNews` | GET | `/api/post/comments/{comment}/count-reactions` | `main-page.json` | Список всех сотрудников оставивших реакцию комментарий к посту |
| `op_050cb886ec1ce01026f4660a450ade5a` | GET | `/api/v2/post/{post}/comments` | `main-page.json` | Получение списка комментариев |
| `op_3963f217b38478b4ce9a0cb16973dcd4` | POST | `/api/v2/post/{post}/comments` | `main-page.json` | Добавление комментария |
| `e5288c188fbcc235513e2a172dece1f4` | GET | `/api/v2/post-comments/{comment}/edit` | `main-page.json` | Получение данных для редактирования комментария |
| `op_0b3bd03adc425fd2df209588e47ffb0a` | PUT | `/api/v2/post-comments/{comment}` | `main-page.json` | Обновление комментария и получение обновленного списка |
| `op_6af486706cbf4645862563b9ab0b9dd6` | DELETE | `/api/v2/post-comments/{comment}` | `main-page.json` | Удаление комментария и получение обновленного списка |
| `postEmojiReactionToggle` | POST | `/api/v2/post/{post}/emoji-reaction` | `main-page.json` | Поставить / снять эмодзи-реакцию на пост |
| `postEmojiReactionEmployeeList` | GET | `/api/v2/post/{post}/emoji-reactions` | `main-page.json` | Список сотрудников, поставивших эмодзи-реакцию на пост |
| `postReactionAdd` | POST | `/api/post/{post}/reaction` | `main-page.json` | Оставить реакцию на новость |
| `postReactionDestroy` | DELETE | `/api/post/{post}/reaction` | `main-page.json` | Удалить реакцию |
| `postReactionCountByNews` | GET | `/api/post/{post}/count-reactions` | `main-page.json` | Список всех сотрудников оставивших реакцию на новость |
| `pulseTagIndex` | GET | `/api/pulse-tags` | `main-page.json` | Список тегов |
| `pulseTagStore` | POST | `/api/pulse-tags` | `main-page.json` | Сохранение нового тега |
| `pulseTagUpdate` | PUT | `/api/pulse-tags` | `main-page.json` | Обновление данных тега |
| `settingsNewsTagDestroy` | DELETE | `/api/pulse-tags/{pulseTag}` | `main-page.json` | Удаление существующего тега |
| `quickQuestionList` | GET | `/api/main-page/quick-question` | `main-page.json` | Список быстрых опросов пользователя |
| `quickQuestionStore` | POST | `/api/main-page/quick-question` | `main-page.json` | Создание быстрого опроса |
| `quickQuestionCreate` | GET | `/api/main-page/quick-question/create` | `main-page.json` | Данные для формы создания быстрых опросов |
| `quickQuestionDestroy` | DELETE | `/api/main-page/quick-question/{quick_question}` | `main-page.json` | Удаление быстрого опроса |
| `quickQuestionStoreAnswer` | POST | `/api/main-page/quick-question/{quick_question}/answer` | `main-page.json` | Сохранение ответа пользователя |
| `quickQuestionStoreReaction` | POST | `/api/main-page/quick-question/{quick_question}/reaction` | `main-page.json` | Сохранение реакции пользователя |
| `quickQuestionAllReqactions` | GET | `/api/main-page/quick-question/{quick_question}/count-reactions` | `main-page.json` | Список сотрудников поставивших реакцию опросу. |
| `quickQuestionAnswerAllUsers` | GET | `/api/main-page/quick-question/{answer}/count-users-by-answer` | `main-page.json` | Список сотрудников оставивших ответ на вопрос. |
| `quickQuestionListSmall` | GET | `/api/main-page/dashboard/quick-question` | `main-page.json` | Свернутый список мини опросов |
| `quickQuestionListAll` | GET | `/api/main-page/dashboard/quick-question/all` | `main-page.json` | Развернутый список мини опросов |
| `quickQuestionListDetail` | GET | `/api/main-page/dashboard/quick-question/{id}` | `main-page.json` | Детальная мини опросов |
| `quickQuestionListAnswers` | GET | `/api/main-page/dashboard/quick-question/{id}/answers` | `main-page.json` | Список ответивших |
| `quickQuestionEmojiReactionToggle` | POST | `/api/main-page/quick-question/{quickQuestion}/emoji-reaction` | `main-page.json` | Поставить / снять эмодзи-реакцию на быстрый опрос |
| `quickQuestionEmojiReactionEmployeeList` | GET | `/api/main-page/quick-question/{quickQuestion}/emoji-reactions` | `main-page.json` | Список сотрудников, поставивших эмодзи-реакцию на быстрый опрос |
| `riskZoneMainPage` | GET | `/api/main-page/dashboard/risk-zone` | `main-page.json` | Данные зоны риска |
| `riskZoneMainPageAll` | GET | `/api/main-page/dashboard/risk-zone/all` | `main-page.json` | Данные зоны риска для расширенного виджета |
| `indexPDPChecking` | GET | `/api/personal-development-plans/checking/list` | `pdp.json` | Список ИПР для проверки |
| `listByUser` | GET | `/api/personal-development-plans/users/{user}` | `pdp.json` | Список ИПР пользователя |
| `indexPDP` | GET | `/api/personal-development-plans` | `pdp.json` | Список ИПР |
| `storePDP` | POST | `/api/personal-development-plans` | `pdp.json` | Создание ИПР |
| `createPDP` | GET | `/api/personal-development-plans/create` | `pdp.json` | Поля для формы создания ИПР |
| `editPDP` | GET | `/api/personal-development-plans/{plan}/edit` | `pdp.json` | Форма для редактирования ИПР |
| `detailPDP` | GET | `/api/personal-development-plans/{plan}` | `pdp.json` | Детальная прохождения ИПР |
| `updatePDP` | PUT | `/api/personal-development-plans/{plan}` | `pdp.json` | Обновление ИПР |
| `deletePDP` | DELETE | `/api/personal-development-plans/{plan}` | `pdp.json` | Удаление ИПР |
| `copyPDP` | POST | `/api/personal-development-plans/{plan}/copy` | `pdp.json` | Копирование ИПР |
| `countDraftsByUser` | GET | `/api/personal-development-plans/count-drafts-by-user/{user}` | `pdp.json` | Получения количество черновиков ИПР для пользователя |
| `competenciesWithMaterials` | GET | `/api/personal-development-plans/{plan}/positions/{position}` | `pdp.json` | Получение компетенций/индикаторов должности вместе с материалам |
| `addMaterialByCompetency` | POST | `/api/personal-development-plans/{plan}/add-materials-by-competencies` | `pdp.json` | Прикрепление материалов по выбранным компетенциям/индикаторам |
| `runPDP` | POST | `/api/personal-development-plans/{plan}/run` | `pdp.json` | Запустить ИПР |
| `growthGetTabs` | GET | `/api/growth/get-tabs` | `pdp.json` | Получение доступных вкладок раздела Развитие |
| `planCommentStore` | POST | `/api/personal-development-plans/{plan}/comments` | `pdp.json` | Добавление нового комментария |
| `planCommentUpdate` | PUT | `/api/personal-development-plans/comments/{comment}` | `pdp.json` | Изменение комментария |
| `planCommentDestroy` | DELETE | `/api/personal-development-plans/comments/{comment}` | `pdp.json` | Удаление комментария |
| `planCommentEdit` | GET | `/api/personal-development-plans/comments/{comment}/edit` | `pdp.json` | Форма редактирования комментария |
| `createMaterialPDP` | GET | `/api/personal-development-plans/material-types/{type}/materials/create` | `pdp.json` | Поля для формы добавления материала ИПР |
| `storeMaterialPDP` | POST | `/api/personal-development-plans/{plan}/materials` | `pdp.json` | Создание нового материала ИПР |
| `editMaterialPDP` | GET | `/api/personal-development-plans/materials/{material}/edit` | `pdp.json` | Поля для формы редактирования материала ИПР |
| `updateMaterialPDP` | PUT | `/api/personal-development-plans/materials/{material}` | `pdp.json` | Поля для формы редактирования материала ИПР |
| `deleteMaterialPDP` | DELETE | `/api/personal-development-plans/materials/{material}` | `pdp.json` | Поля для формы редактирования материала ИПР |
| `sortMaterialPDP` | POST | `/api/personal-development-plans/{plan}/sort-materials` | `pdp.json` | Сортировка материалов ИПР |
| `setPassedMaterial` | POST | `/api/personal-development-plans/materials/{material}/set-passage-status` | `pdp.json` | Смена статуса прохождения у материала ИПР |
| `setCompletedPlan` | POST | `/api/personal-development-plans/{plan}/set-completed` | `pdp.json` | Принятие ИПР проверяющим |
| `attachFileToMaterial` | POST | `/api/personal-development-plans/materials/{material}/attach-file` | `pdp.json` | Прикрепить файл к материалу |
| `deleteAttachFile` | DELETE | `/api/personal-development-plans/attached-files/{file}` | `pdp.json` | Удалить прикрепленный к материалу файл |
| `indexUserPDP` | GET | `/api/personal-development-plans/my/list` | `pdp.json` | Список ИПР авторизованного юзера |
| `appUserLogin` | POST | `/api/recruitment/app/login` | `recruitment.json` | Авторизация сотрудника |
| `appAuthLoginOtp` | POST | `/api/recruitment/app/login-otp/{user}` | `recruitment.json` | Авторизация пользователя c OTP |
| `appUserLoginInfo` | GET | `/api/recruitment/app/login-info` | `recruitment.json` | Информация по авторизованному сотруднику |
| `appRefreshToken` | GET | `/api/recruitment/app/refresh-token` | `recruitment.json` | Обновление токена доступа |
| `appSettingsCreate` | GET | `/api/recruitment/app/settings/create` | `recruitment.json` | Данные для формы настройки |
| `appSettingsStore` | POST | `/api/recruitment/app/settings/store` | `recruitment.json` | Сохранение настроек пользователя |
| `appCandidateCreate` | POST | `/api/recruitment/app/candidate/create` | `recruitment.json` | Данные для формы кандидата |
| `appCandidateStore` | POST | `/api/recruitment/app/candidate/store` | `recruitment.json` | Сохранение данных кандидата |
| `searchAppCandidateByNameAndLastName` | POST | `/api/recruitment/app/candidates/search` | `recruitment.json` | Проверка наличия заявки кандидата |
| `appCandidateList` | GET | `/api/recruitment/app/candidates` | `recruitment.json` | Список кандидатов |
| `getPipelineStage` | GET | `/api/recruitment/app/get-pipeline-stage` | `recruitment.json` | Возвращает этапы по вакансии |
| `candidateCheckList` | GET | `/api/recruitment/candidates/{candidate}/check-lists` | `recruitment.json` | Список всех чек-листов кандидата |
| `candidateCheckListStore` | POST | `/api/recruitment/candidates/{candidate}/check-lists` | `recruitment.json` | Создание чек-листа |
| `candidateCheckListCreate` | GET | `/api/recruitment/candidates/{candidate}/check-lists/create` | `recruitment.json` | Форма назначения чек-листа |
| `candidateCheckListShow` | GET | `/api/recruitment/check-lists/{check-list}` | `recruitment.json` | Редактирование чек-листа |
| `checkListUpdateFilter` | PUT | `/api/recruitment/check-lists/{check-list}` | `recruitment.json` | Обновить фильтрс |
| `candidateCheckListDestroy` | DELETE | `/api/recruitment/check-lists/{check-list}` | `recruitment.json` | Удаление чек-листа |
| `checkListSendAnswer` | PUT | `/api/recruitment/check-lists/points/{point}/send-answer` | `recruitment.json` | Отправить ответ на вопрос |
| `vacancyCheckLists` | GET | `/api/recruitment/vacancies/{vacancy}/check-lists` | `recruitment.json` | Список всех чек-листов по вакансии |
| `candidateCheckListVacancyStore` | POST | `/api/recruitment/vacancies/{vacancy}/check-lists` | `recruitment.json` | Создание чек-листа |
| `candidateCheckListVacancyCreate` | GET | `/api/recruitment/vacancies/{vacancy}/check-lists/create` | `recruitment.json` | Форма назначения чек-листа |
| `candidateCommentStore` | POST | `/api/recruitment/candidates/{candidate}/comments` | `recruitment.json` | Добавление нового комментария |
| `candidateCommentEdit` | GET | `/api/recruitment/comments/{comment}/edit` | `recruitment.json` | Форма изменения комментария |
| `candidateCommentUpdate` | PUT | `/api/recruitment/comments/{comment}` | `recruitment.json` | Изменение комментария |
| `candidateCommentDestroy` | DELETE | `/api/recruitment/comments/{comment}` | `recruitment.json` | Удаление комментария |
| `candidateList` | GET | `/api/recruitment/candidates` | `recruitment.json` | Список кандидатов |
| `candidateStore` | POST | `/api/recruitment/candidates` | `recruitment.json` | Создание нового кандидата |
| `candidateCreate` | GET | `/api/recruitment/candidates/create` | `recruitment.json` | Форма для создания кандидата |
| `candidateCreateFromPdf` | POST | `/api/recruitment/candidates/create-from-pdf` | `recruitment.json` | Форма для создания кандидата из PDF |
| `candidateMassCreation` | POST | `/api/recruitment/candidates/mass-creation` | `recruitment.json` | Массовое создание кандидатов из резюме |
| `candidateShow` | GET | `/api/recruitment/candidates/{candidate}` | `recruitment.json` | Информация о кандидате |
| `candidateUpdate` | PUT | `/api/recruitment/candidates/{candidate}` | `recruitment.json` | Обновление кандидата |
| `candidateDestroy` | DELETE | `/api/recruitment/candidates/{candidate}` | `recruitment.json` | Удаление кандидата |
| `candidateResumeExportText` | GET | `/api/recruitment/candidate-resume/{candidateResume}/exportText` | `recruitment.json` | Экспорт текста резюме в DOCX |
| `candidateEdit` | GET | `/api/recruitment/candidates/{candidate}/edit` | `recruitment.json` | Форма для изменения кандидата |
| `candidateGroupFieldEdit` | GET | `/api/recruitment/candidates/{candidate}/fields/{field}/edit` | `recruitment.json` | Форма для изменения Группы полей кандидата |
| `candidateDetailFieldEdit` | GET | `/api/recruitment/candidates/{candidate}/detail-fields/edit` | `recruitment.json` | Форма для изменения детальной информации кандидата |
| `candidateAdditionalFieldEdit` | GET | `/api/recruitment/candidates/{candidate}/additional-fields/edit` | `recruitment.json` | Форма для изменения Дополнительной информации кандидата |
| `candidateDetailUpdate` | PUT | `/api/recruitment/candidates/{candidate}/detail-fields` | `recruitment.json` | Обновление Подробностей кандидата |
| `candidateAdditionalUpdate` | PUT | `/api/recruitment/candidates/{candidate}/additional-fields` | `recruitment.json` | Обновление Дополнительной кандидата |
| `candidateFieldsUpdate` | PUT | `/api/recruitment/candidates/{candidate}/fields` | `recruitment.json` | Обновление полей кандидата |
| `candidateCoverFieldEdit` | GET | `/api/recruitment/candidates/{candidate}/cover-letter/edit` | `recruitment.json` | Форма для изменения сопроводительного письма кандидата |
| `candidateTagsEdit` | GET | `/api/recruitment/candidates/{candidate}/tags/edit` | `recruitment.json` | Форма для изменения тегов кандидата |
| `candidateTagsUpdate` | PUT | `/api/recruitment/candidates/{candidate}/tags` | `recruitment.json` | Обновление тегов кандидата |
| `candidatesMailStore` | POST | `/api/recruitment/candidates/mails-preview` | `recruitment.json` | Получение информации для пред-просмотра письма |
| `candidatesMailSend` | POST | `/api/recruitment/candidates/mails` | `recruitment.json` | Отправка письма кандидатам |
| `candidatePdnRequestTemplateInfo` | GET | `/api/recruitment/candidates/pdn-request-template-info/{template}` | `recruitment.json` | Получение данных шаблона письма |
| `candidatesPdnRequestPreview` | POST | `/api/recruitment/candidates/pdn-request-preview` | `recruitment.json` | Получение информации для пред-просмотра ПДН |
| `candidatesPdnRequestSend` | POST | `/api/recruitment/candidates/pdn-request` | `recruitment.json` | Отправка ПДН кандидатам |
| `candidateCoverUpdate` | PUT | `/api/recruitment/candidates/{candidate}/cover-letter` | `recruitment.json` | Обновление соповодительного письма кандидата |
| `candidateLinkVacancyCreate` | GET | `/api/recruitment/candidates/{candidate}/link-vacancy/create` | `recruitment.json` | Форма привязки к вакансии |
| `candidateLinkVacancyStore` | POST | `/api/recruitment/candidates/{candidate}/link-vacancy` | `recruitment.json` | Привязка к вакансии |
| `candidateLinkVacancyUnlink` | POST | `/api/recruitment/candidates/{candidate}/link-vacancy/unlink` | `recruitment.json` | Отвязать от вакансии |
| `candidatePipelineStageStore` | POST | `/api/recruitment/candidates/{candidate}/vacancies` | `recruitment.json` | Изменение этапа цикла вакансии / Комментарий к вакансии |
| `candidateHistoryUpdate` | PUT | `/api/recruitment/histories/{history}` | `recruitment.json` | Изменение Комментария к вакансии |
| `candidateHistoryDestroy` | DELETE | `/api/recruitment/histories/{history}` | `recruitment.json` | Удаление истории / Комментария к вакансии |
| `candidateVacancyHistoryGet` | GET | `/api/recruitment/candidates/{candidate}/vacancy/{vacancy}/history` | `recruitment.json` | История кандидата к вакансии |
| `candidateRejection` | POST | `/api/recruitment/candidates/{candidate}/rejection` | `recruitment.json` | Отклонить |
| `candidateActivation` | POST | `/api/recruitment/candidates/{candidate}/activation` | `recruitment.json` | Активация |
| `candidateHistory` | GET | `/api/recruitment/candidates/{candidate}/history` | `recruitment.json` | История действия |
| `candidateExport` | POST | `/api/recruitment/candidates/export` | `recruitment.json` | Экспорт списка кандидатов |
| `candidateExportExtended` | POST | `/api/recruitment/candidates/export-extended` | `recruitment.json` | Расширенный экспорт списка кандидатов |
| `candidateAddEmployee` | GET | `/api/recruitment/candidates/{candidate}/add-employee` | `recruitment.json` | Взять на работу |
| `searchCandidateByNameAndLastName` | POST | `/api/recruitment/candidates/search` | `recruitment.json` | Проверка налачия заявки кандидата |
| `candidateInterviewExternalForm` | GET | `/api/recruitment/candidates/{candidateVacancy}/interview-external-form` | `recruitment.json` | Форма приглашения на интервью |
| `candidateInterviewExternal` | POST | `/api/recruitment/candidates/{candidateVacancy}/interview-external-form` | `recruitment.json` | Отправка приглашения на интервью |
| `candidateRejectExternalForm` | GET | `/api/recruitment/candidates/{candidateVacancy}/reject-external-form` | `recruitment.json` | Форма отказа внешнему кандидату |
| `candidateRejectExternal` | POST | `/api/recruitment/candidates/{candidateVacancy}/reject-external-form` | `recruitment.json` | Отправка отказа внешнему кандидату |
| `candidateResumeShow` | GET | `/api/recruitment/candidates/{candidate}/resumes` | `recruitment.json` | Список резюме кандидата |
| `candidateDuplicatesShow` | GET | `/api/recruitment/candidates/{candidate}/getDuplicates` | `recruitment.json` | Информация о возможном дубле кандидата |
| `_andidateDuplicates` | POST | `/api/recruitment/candidates/{candidate}/duplicates` | `recruitment.json` | Решение по возможным дублям |
| `candidateDocumentList` | GET | `/api/recruitment/candidates/{candidate}/documents` | `recruitment.json` | Список документов кандидата |
| `candidateDocumentStore` | POST | `/api/recruitment/candidates/{candidate}/documents` | `recruitment.json` | Добавление нового документа |
| `candidateDocumentDestroy` | DELETE | `/api/recruitment/documents/{document}` | `recruitment.json` | Удаление документа кандидата |
| `candidateEducationCreate` | GET | `/api/recruitment/candidates/{candidate}/educations/create` | `recruitment.json` | Форма добавления нового образовния |
| `candidateEducationStore` | POST | `/api/recruitment/candidates/{candidate}/educations` | `recruitment.json` | Добавление нового образования |
| `candidateEducationEdit` | GET | `/api/recruitment/educations/{education}/edit` | `recruitment.json` | Форма изменения образования |
| `candidateEducationUpdate` | PUT | `/api/recruitment/educations/{education}` | `recruitment.json` | Изменение образования |
| `candidateEducationDestroy` | DELETE | `/api/recruitment/educations/{education}` | `recruitment.json` | Удаление образования |
| `candidateInterviewsList` | GET | `/api/recruitment/candidates/{candidate}/interviews` | `recruitment.json` | Список всех собеседований кандидата |
| `candidateInterviewStore` | POST | `/api/recruitment/candidates/{candidate}/interviews` | `recruitment.json` | Создание собеседования |
| `candidateInterviewCreate` | GET | `/api/recruitment/candidates/{candidate}/interviews/create` | `recruitment.json` | Форма создания собеседования |
| `candidateInterviewEdit` | GET | `/api/recruitment/interviews/{interview}/edit` | `recruitment.json` | Форма редактирования собеседования |
| `candidateInterviewUpdate` | PUT | `/api/recruitment/interviews/{interview}` | `recruitment.json` | Обновление собеседования |
| `candidateInterviewDestroy` | POST | `/api/recruitment/interviews/{interview}/cancel` | `recruitment.json` | Отмена собеседования |
| `candidateMailList` | GET | `/api/recruitment/candidates/{candidate}/mails` | `recruitment.json` | Список всех писем кандидата |
| `candidateMailStore` | POST | `/api/recruitment/candidates/{candidate}/mails` | `recruitment.json` | Получение информации для пред-просмотра письма |
| `candidateMailShow` | GET | `/api/recruitment/mails/{mail}` | `recruitment.json` | Детальная почтового сообщения кандидата |
| `candidateMailDestroy` | DELETE | `/api/recruitment/mails/{mail}` | `recruitment.json` | Удаление письма |
| `candidateMailCreate` | GET | `/api/recruitment/candidates/{candidate}/mails/create` | `recruitment.json` | Форма создания Письма |
| `candidateMailTemplate` | GET | `/api/recruitment/candidates/{candidate}/get-template/{template}` | `recruitment.json` | Получение данных шаблона письма |
| `candidateMailTemplateInfo` | GET | `/api/recruitment/candidates/mail-template-info/{template}` | `recruitment.json` | Получение данных шаблона письма |
| `mailSend` | POST | `/api/recruitment/candidates/{candidate}/mail-send` | `recruitment.json` | Отправка письма кандидату |
| `candidateNoteList` | GET | `/api/recruitment/candidates/{candidate}/notes` | `recruitment.json` | Список заметок кандидата |
| `candidateNoteStore` | POST | `/api/recruitment/candidates/{candidate}/notes` | `recruitment.json` | Добавление новой заметки к кандидату |
| `candidateNoteCreate` | GET | `/api/recruitment/candidates/{candidate}/notes/create` | `recruitment.json` | Форма создания Заметки |
| `candidateNoteEdit` | GET | `/api/recruitment/notes/{note}/edit` | `recruitment.json` | Форма изменения Заметки |
| `candidateNoteUpdate` | PUT | `/api/recruitment/notes/{note}` | `recruitment.json` | Изменение Заметки |
| `candidatenoteDestroy` | DELETE | `/api/recruitment/notes/{note}` | `recruitment.json` | Удаление Заметки |
| `candidateOffersList` | GET | `/api/recruitment/candidates/{candidate}/offers` | `recruitment.json` | Список всех предложений кандидата |
| `candidateOfferStore` | POST | `/api/recruitment/candidates/{candidate}/offers` | `recruitment.json` | Создание предложения |
| `candidateOfferCreate` | GET | `/api/recruitment/vacancies/{vacancy}/offers/create` | `recruitment.json` | Форма создания предложения |
| `getTemplateInfo` | GET | `/api/recruitment/offer-template-info/{template}` | `recruitment.json` | Получение информации о шаблоне предложения |
| `vacancyCandidatesOfferStore` | POST | `/api/recruitment/vacancies/{vacancy}/offers` | `recruitment.json` | Массовое создание предложения |
| `saveManyOffers` | GET | `/api/recruitment/vacancies/{vacancy}/offers/{uuid}/save` | `recruitment.json` | Сохранение массовое предложения кандидату |
| `offerShow` | GET | `/api/recruitment/offers/{offer}` | `recruitment.json` | Детальная предложения кандидату |
| `candidateOfferPut` | PUT | `/api/recruitment/offers/{offer}` | `recruitment.json` | Обновление предложения |
| `candidateOfferDestroy` | DELETE | `/api/recruitment/offers/{offer}` | `recruitment.json` | Удаление предложения |
| `offerSend` | POST | `/api/recruitment/offers/{offer}/send` | `recruitment.json` | Отправка предложения кандидату |
| `offerSave` | GET | `/api/recruitment/offers/{offer}/save` | `recruitment.json` | Сохранение предложения кандидату |
| `candidateOfferEdit` | GET | `/api/recruitment/offers/{offer}/edit` | `recruitment.json` | Форма редактирования предложения |
| `candidateOfferSign` | POST | `/api/recruitment/offers/{offer}/sign` | `recruitment.json` | Отправка ответа на предложение |
| `offerCancel` | POST | `/api/recruitment/offers/{offer}/cancel` | `recruitment.json` | Отмена предложения |
| `offerDetail` | GET | `/api/recruitment/offers/{offer}/detail` | `recruitment.json` | Детальная предложения кандидату |
| `approvalListUsers` | GET | `/api/recruitment/offers/{offer}/list-users` | `recruitment.json` | Список устверждающих пользователей |
| `offerApprove` | GET | `api/recruitment/offers/{offer}/approve` | `recruitment.json` | Согласование Оффера |
| `offerRemind` | GET | `/api/recruitment/offers/{offer}/remind` | `recruitment.json` | Напоминание о согласовании оффера |
| `OfferReject` | GET | `/api/recruitment/offers/{offer}/reject` | `recruitment.json` | Отклонение оффера |
| `candidateOfferCommentStore` | POST | `/api/recruitment/candidate-offer-comments/{offer}` | `recruitment.json` | Добавить комментарий |
| `candidateOfferCommentEdit` | GET | `/api/recruitment/candidate-offer-comments/{comment}/edit` | `recruitment.json` | Форма редактирования комментария |
| `candidateOfferCommentUpdate` | PUT | `/api/recruitment/candidate-offer-comments/{comment}` | `recruitment.json` | Обновление комментария |
| `candidateOfferCommentDestroy` | DELETE | `/api/recruitment/candidate-offer-comments/{comment}` | `recruitment.json` | Удаление комментария |
| `candidatePersonalDataRequestCreate` | GET | `/api/recruitment/candidates/{candidate}/personal-data-request/create` | `recruitment.json` | Форма создания Запроса ПДн |
| `candidatePersonalDataRequestShowCurrent` | GET | `/api/recruitment/candidates/{candidate}/personal-data-request` | `recruitment.json` | Просмотр текущего запроса ПДн |
| `getPersonalDataRequestTemplatePreview` | POST | `/api/recruitment/candidates/{candidate}/personal-data-request` | `recruitment.json` | Получение информации для предпросмотра о шаблоне Запроса ПДн |
| `templateSend` | POST | `/api/recruitment/candidates/{candidate}/personal-data-request/send` | `recruitment.json` | Отправка Запроса  кандидату |
| `candidatePersonalDataRequestSign` | GET | `/api/recruitment/personal-data-request-template/sign` | `recruitment.json` | Отправка ответа на Запрос ПДн |
| `userOnboardingStepsList` | GET | `/api/recruitment/candidates/{candidate}/preboarding-list` | `recruitment.json` | Получение списка этапов и уровней по привязанному онбордингу |
| `userBoardingMaterialCompleted` | GET | `/api/recruitment/candidates/{candidate}/preboarding/step/{step}/completed` | `recruitment.json` | Прохождение этапа бординга |
| `userBoardingMaterialUnCompleted` | GET | `/api/users/{user}/boarding/step/{step}/uncompleted` | `recruitment.json` | Отмена прохождения этапа бординга |
| `candidatePreboardingCreate` | GET | `/api/candidates/{candidate}/preboarding/create` | `recruitment.json` | Получение полей для формы назначения пребординга |
| `candidatePreboardingAppoint` | POST | `/api/recruitment/candidates/{candidate}/preboarding/appoint` | `recruitment.json` | Назначение пребординга кандидату |
| `boardingDelete` | DELETE | `/api/users/{user}/delete-boarding/{type-boarding}` | `recruitment.json` | Удаление онбординга/оффбординга |
| `candidateQuestionnaireCommentStore` | POST | `/api/recruitment/candidate-questionnaires/{candidateQuestionnaire}/comments` | `recruitment.json` | Комментарий к анкете: создание |
| `candidateQuestionnaireCommentEdit` | GET | `/api/recruitment/candidate-questionnaire-comments/{comment}/edit` | `recruitment.json` | Комментарий к анкете: форма редактирования |
| `candidateQuestionnaireCommentUpdate` | PUT | `/api/recruitment/candidate-questionnaire-comments/{comment}` | `recruitment.json` | Комментарий к анкете: обновление |
| `candidateQuestionnaireCommentDestroy` | DELETE | `/api/recruitment/candidate-questionnaire-comments/{comment}` | `recruitment.json` | Комментарий к анкете: удаление |
| `candidateQuestionnaireIndex` | GET | `/api/recruitment/candidate-questionnaires` | `recruitment.json` | Список анкет кандидатов |
| `candidateQuestionnaireExport` | POST | `/api/recruitment/candidate-questionnaires/export` | `recruitment.json` | Экспорт анкет кандидатов |
| `candidateQuestionnaireExportOne` | POST | `/api/recruitment/candidate-questionnaires/{candidateQuestionnaire}/export` | `recruitment.json` | Экспорт одной анкеты кандидата |
| `candidateQuestionnaireMultiActionsExport` | POST | `/api/recruitment/multi-actions/candidate-questionnaires` | `recruitment.json` | Мульти-действие: выгрузить анкеты |
| `candidateQuestionnaireIndexByCandidate` | GET | `/api/recruitment/candidates/{candidate}/questionnaires` | `recruitment.json` | Список анкет кандидата |
| `candidateQuestionnaireStoreFromCandidate` | POST | `/api/recruitment/candidates/{candidate}/questionnaires` | `recruitment.json` | Создать анкету (из карточки кандидата) |
| `candidateQuestionnaireIndexByVacancy` | GET | `/api/recruitment/vacancies/{vacancy}/questionnaires` | `recruitment.json` | Список анкет по вакансии |
| `candidateQuestionnaireStoreFromVacancy` | POST | `/api/recruitment/vacancies/{vacancy}/questionnaires` | `recruitment.json` | Создать анкету (из карточки вакансии) |
| `candidateQuestionnaireCreateFormForCandidate` | GET | `/api/recruitment/candidates/{candidate}/questionnaires/create` | `recruitment.json` | Форма создания анкеты (кандидат) |
| `candidateQuestionnaireCreateFormForVacancy` | GET | `/api/recruitment/vacancies/{vacancy}/questionnaires/create` | `recruitment.json` | Форма создания анкеты (вакансия) |
| `candidateQuestionnaireShow` | GET | `/api/recruitment/candidate-questionnaires/{candidateQuestionnaire}` | `recruitment.json` | Просмотр анкеты |
| `candidateQuestionnaireDestroy` | DELETE | `/api/recruitment/candidate-questionnaires/{candidateQuestionnaire}` | `recruitment.json` | Удалить анкету |
| `candidateQuestionnaireObserversEditForm` | GET | `/api/recruitment/candidate-questionnaires/{candidateQuestionnaire}/observers/edit` | `recruitment.json` | Форма наблюдателей |
| `candidateQuestionnaireObserversList` | GET | `/api/recruitment/candidate-questionnaires/{candidateQuestionnaire}/get-observers` | `recruitment.json` | Список наблюдателей анкеты |
| `candidateQuestionnaireUpdateObservers` | PUT | `/api/recruitment/candidate-questionnaires/{candidateQuestionnaire}/observers` | `recruitment.json` | Обновить наблюдателей |
| `candidateQuestionnaireResend` | POST | `/api/recruitment/candidate-questionnaires/{candidateQuestionnaire}/resend` | `recruitment.json` | Повторная отправка |
| `candidateQuestionnaireSetDecision` | POST | `/api/recruitment/candidate-questionnaires/{candidateQuestionnaire}/decision` | `recruitment.json` | Решение по анкете |
| `candidateQuestionnaireSendForRevision` | POST | `/api/recruitment/candidate-questionnaires/{candidateQuestionnaire}/send-for-revision` | `recruitment.json` | На доработку |
| `candidateQuestionnaireChecked` | POST | `/api/recruitment/candidate-questionnaires/{candidateQuestionnaire}/checked` | `recruitment.json` | Взять анкету в работу |
| `candidateReferralList` | GET | `/api/recruitment/candidates/{candidate}/referrals` | `recruitment.json` | Список реферальных программ кандидата |
| `candidateReferralStore` | POST | `/api/recruitment/candidates/{candidate}/referrals` | `recruitment.json` | Добавление новой реферальной программы |
| `candidateReferralCreate` | GET | `/api/recruitment/candidates/{candidate}/referrals/create` | `recruitment.json` | Форма добавления нового реферальной программы |
| `candidateReferralEdit` | GET | `/api/recruitment/referrals/{referral}/edit` | `recruitment.json` | Форма изменения реферальной программы |
| `candidateReferralUpdate` | PUT | `/api/recruitment/referrals/{referral}` | `recruitment.json` | Изменение реферальной программы |
| `candidateReferralCompleteForm` | GET | `/api/recruitment/referrals/{referral}/complete-form` | `recruitment.json` | Форма изменения статуса реферальной программы |
| `candidateReferralComplete` | POST | `/api/recruitment/referrals/{referral}/complete` | `recruitment.json` | Изменение статус реферальной программы |
| `candidateReferralUncomplete` | GET | `/api/recruitment/referrals/{referral}/uncomplete` | `recruitment.json` | Изменение статус реферальной программы |
| `candidateTasksList` | GET | `/api/recruitment/candidates/{candidate}/tasks` | `recruitment.json` | Список задач |
| `candidateTaskStore` | POST | `/api/recruitment/candidates/{candidate}/tasks` | `recruitment.json` | Сохранение новой задачи комментария |
| `candidateTaskCreate` | GET | `/api/recruitment/candidates/{candidate}/tasks/create` | `recruitment.json` | Добавление новой задачи |
| `candidateTaskUpdateStatus` | GET | `/api/recruitment/candidates/{candidate}/tasks/{task}/update-status` | `recruitment.json` | Изменение статуса выполнения задачи |
| `getIframeUrl` | GET | `/api/recruitment/candidates/{candidate}/getWazzupUrlIframe` | `recruitment.json` | Get iframe URL for Wazzup chat |
| `candidateWorkExperienceCreate` | GET | `/api/recruitment/candidates/{candidate}/work-experiences/create` | `recruitment.json` | Форма добавления нового опыта |
| `candidateWorkExperienceStore` | POST | `/api/recruitment/candidates/{candidate}/work-experiences` | `recruitment.json` | Добавление нового опыта |
| `candidateWorkExperienceEdit` | GET | `/api/recruitment/work-experiences/{work_experience}/edit` | `recruitment.json` | Форма изменения опыта |
| `candidateWorkExperienceUpdate` | PUT | `/api/recruitment/work-experiences/{work_experience}` | `recruitment.json` | Изменение опыта |
| `candidateWorkExperienceDestroy` | DELETE | `/api/recruitment/work-experiences/{work_experience}` | `recruitment.json` | Удаление опыта |
| `careerSite` | GET | `/api/recruitment/careers` | `recruitment.json` | Список открытых вакансий |
| `careerSiteDetail` | GET | `/api/recruitment/careers/{vacancy}` | `recruitment.json` | Детальная страница вакансии |
| `careerSiteSend` | POST | `/api/recruitment/careers/request` | `recruitment.json` | Отклик на вакансию |
| `vacancyCommentsList` | GET | `/api/recruitment/vacancies/{vacancy}/comments` | `recruitment.json` | Список комментариев |
| `vacancyCommentStore` | POST | `/api/recruitment/vacancies/{vacancy}/comments` | `recruitment.json` | Добавление нового комментария |
| `vacancyCommentEdit` | GET | `/api/recruitment/vacancies/{vacancy}/comments/{comment}/edit` | `recruitment.json` | Форма изменения комментария |
| `vacancyCommentUpdate` | PUT | `/api/recruitment/vacancies/{vacancy}/comments/{comment}` | `recruitment.json` | Изменение комментария |
| `vacancyCommentDestroy` | DELETE | `/api/recruitment/vacancies/{vacancy}/comments/{comment}` | `recruitment.json` | Удаление комментария |
| `b19dbe630ba73644a05b355401ded18f` | POST | `/api/recruitment/vacancies/{vacancy}/comments/{comment}/send-reaction` | `recruitment.json` | Добавление реакции на комментарий |
| `c4bb9f924422ab107ca65df62813de60` | GET | `/api/recruitment/vacancies/{vacancy}/comments/{comment}/count-reactions` | `recruitment.json` | Получение количества реакций на комментарий |
| `op_086f4f396dcda39208b70164d228b97a` | GET | `/api/v2/recruitment/vacancies/{vacancy}/comments` | `recruitment.json` | Список комментариев |
| `op_161d5ba6fede63435741b6d38b6d2184` | POST | `/api/v2/recruitment/vacancies/{vacancy}/comments` | `recruitment.json` | Добавление комментария |
| `op_7e8b4f233e738ba3e959939c63017dd6` | PUT | `/api/v2/recruitment/vacancies/{vacancy}/comments/{comment}` | `recruitment.json` | Обновление комментария |
| `d574d74912b736241fdcab8e172827d4` | DELETE | `/api/v2/recruitment/vacancies/{vacancy}/comments/{comment}` | `recruitment.json` | Удаления комментария |
| `vacanciesList` | GET | `/api/recruitment/vacancies` | `recruitment.json` | Список вакансий |
| `vacancyStore` | POST | `/api/recruitment/vacancies` | `recruitment.json` | Создание новой вакансии |
| `vacanciesMembersList` | GET | `/api/recruitment/vacancies/{vacancy}/get-members` | `recruitment.json` | Список соисполнителей вакансии |
| `vacancyCreate` | GET | `/api/recruitment/vacancies/create` | `recruitment.json` | Форма для создания вакансии |
| `vacancyShow` | GET | `/api/recruitment/vacancies/{vacancy}` | `recruitment.json` | Информация о вакансии |
| `vacancyUpdate` | PUT | `/api/recruitment/vacancies/{vacancy}` | `recruitment.json` | Изменение вакансии |
| `vacancyDestroy` | DELETE | `/api/recruitment/vacancies/{vacancy}` | `recruitment.json` | Удаление вакансии |
| `vacancyCycle` | GET | `/api/recruitment/vacancies/{vacancy}/cycle` | `recruitment.json` | Вкладка Цикл |
| `candidateVacancyCycle` | GET | `/api/recruitment/candidate-vacancy/{candidateVacancy}/cycle` | `recruitment.json` | Вкладка Цикл по одному кандидату |
| `vacancyCandidateMailStore` | POST | `/api/recruitment/vacancies/{vacancy}/mails-preview` | `recruitment.json` | Получение информации для пред-просмотра письма |
| `vacancyMailSend` | POST | `/api/recruitment/vacancies/{vacancy}/mails` | `recruitment.json` | Отправка письма кандидатам |
| `vacancy_andidatePipelineStage` | GET | `/api/recruitment/vacancies/{vacancy}/stage/{stage}` | `recruitment.json` | Вкладка Цикл - Кандидаты воронки вакансии с пагинацией |
| `vacancycandidateRejectionStage` | GET | `/api/recruitment/vacancies/{vacancy}/rejection/{reason}` | `recruitment.json` | Вкладка Цикл - Кандидаты воронки вакансии с пагинацией |
| `vacancyDetail` | GET | `/api/recruitment/vacancies/{vacancy}/detail` | `recruitment.json` | Вкладка Подробности |
| `vacancyEdit` | GET | `/api/recruitment/vacancies/{vacancy}/edit` | `recruitment.json` | Форма для редактирования вакансии |
| `vacancyArchive` | GET | `/api/recruitment/vacancies/{vacancy}/archive` | `recruitment.json` | Архивирование |
| `vacancyRestore` | GET | `/api/recruitment/vacancies/{vacancy}/restore` | `recruitment.json` | Восстановить |
| `vacancyCopy` | GET | `/api/recruitment/vacancies/{vacancy}/copy` | `recruitment.json` | Копирование вакансии |
| `pipelineStageChange` | POST | `/api/recruitment/vacancies/{vacancy}/stage-change` | `recruitment.json` | Изменение этапа цикла найма |
| `rejection` | POST | `/api/recruitment/vacancies/{vacancy}/rejection` | `recruitment.json` | Отклонение сотрудника |
| `sortCandidates` | POST | `/api/recruitment/vacancies/{vacancy}/sort-candidates` | `recruitment.json` | Сортировка кандидатов в рамках этапа |
| `activation` | POST | `/api/recruitment/vacancies/{vacancy}/activation` | `recruitment.json` | Активация сотрудников |
| `unlink` | POST | `/api/recruitment/vacancies/{vacancy}/unlink` | `recruitment.json` | Удаление сотрудников из вакансии |
| `linkVacancyCreate` | GET | `/api/recruitment/vacancies/{vacancy}/link/create` | `recruitment.json` | Форма привязки сотрудников к вакансии |
| `linkVacancy` | POST | `/api/recruitment/vacancies/{vacancy}/link` | `recruitment.json` | Привязка сотрудников к вакансии |
| `addTagsCandidateCreate` | GET | `/api/recruitment/vacancies/{vacancy}/tags/create` | `recruitment.json` | Форма добавления тегов сотрудникам |
| `addTagsCandidate` | POST | `/api/recruitment/vacancies/{vacancy}/tags` | `recruitment.json` | Добавление тегов к вакансии |
| `vacancyStatus` | POST | `/api/recruitment/vacancies/{vacancy}/status` | `recruitment.json` | Изменение статуса |
| `vacancy` | GET | `/api/recruitment/vacancies/{vacancy}/history` | `recruitment.json` | История действия |
| `vacancyAddCandidatesCreate` | GET | `/api/recruitment/vacancies/{vacancy}/add-candidates/create` | `recruitment.json` | Данные для формы добавления сотрудников к вакансии |
| `vacancyAddCandidates` | POST | `/api/recruitment/vacancies/{vacancy}/add-candidates` | `recruitment.json` | Добавление сотрудников к вакансии |
| `vacancyOffersList` | GET | `/api/recruitment/vacancies/{vacancy}/offers-list` | `recruitment.json` | Список всех предложений по вакансии |
| `vacancyInterviewersList` | GET | `/api/recruitment/vacancies/{vacancy}/get-interviewers` | `recruitment.json` | Список интервьюверов |
| `getVacancyInterviewersList` | GET | `/api/recruitment/vacancies/{vacancy}/get-interviewers-list` | `recruitment.json` | Список интервьюверов |
| `vacancy_andidatesList` | GET | `/api/recruitment/vacancies/{vacancy}/candidates` | `recruitment.json` | Список кандидатов |
| `vacancy_andidatesAttachmentList` | GET | `/api/recruitment/vacancies/{vacancy}/list-attachment-candidates` | `recruitment.json` | Список кандидатов доступных для вакансии |
| `vacancyGetRecruiters` | GET | `/api/recruitment/vacancy/{vacancy}/get-recruiters` | `recruitment.json` | Получения списка рекрутеров в вакансии |
| `dashboardVacanciesList` | GET | `/api/main-page/vacancies` | `recruitment.json` | Список вакансий для виджета |
| `vacancyExport` | POST | `/api/recruitment/vacancies/export` | `recruitment.json` | Экспорт списка вакансий |
| `vacancyDocumentList` | GET | `/api/recruitment/vacancies/{vacancy}/documents` | `recruitment.json` | Список документов вакансии |
| `vacancyDocumentStore` | POST | `/api/recruitment/vacancies/{vacancy}/documents` | `recruitment.json` | Добавление нового документа |
| `vacancyDocumentDestroy` | DELETE | `/api/recruitment/vacancy/documents/{document}` | `recruitment.json` | Удаление документа вакансии |
| `vacancyIntegrationList` | GET | `/api/recruitment/vacancies/{vacancy}/integration` | `recruitment.json` | Список интеграций вакансии |
| `vacancyIntegrationCreate` | GET | `/api/recruitment/vacancies/{vacancy}/integration/{integration}/create` | `recruitment.json` | Форма для публикации вакансии |
| `vacancyIntagrationStore` | POST | `/api/recruitment/vacancies/{vacancy}/integration/{integration}` | `recruitment.json` | Публикация вакансии на HH |
| `vacancyIntegrationEdit` | GET | `/api/recruitment/vacancies/integration/{vacancy}/edit` | `recruitment.json` | Форма для редактирования вакансии |
| `vacancyIntagrationUpdate` | PUT | `/api/recruitment/vacancies/integration/{vacancy}` | `recruitment.json` | Обновление вакансии на HH |
| `vacancyIntegrationDestroy` | DELETE | `/api/recruitment/vacancies/integration/{vacancy}` | `recruitment.json` | Удаление интеграции вакансии |
| `vacancyIntegrationActive` | GET | `/api/recruitment/vacancies/integration/{vacancy}/active` | `recruitment.json` | Активация\Деактивация интеграции |
| `vacancyIntegrationSearchHHAreas` | GET | `/api/recruitment/vacancies/integration/{integration}/areas` | `recruitment.json` | Список городов размещения вакансии |
| `vacancyIntegrationSearchHHProfessionalRole` | GET | `/api/recruitment/vacancies/integration/{integration}/roles` | `recruitment.json` | Список специализаций вакансии |
| `vacancyIntegrationAttach` | POST | `/api/recruitment/vacancies/{vacancy}/integration/{integration}/attach` | `recruitment.json` | Прикрепление внешней вакансии |
| `vacancyRequestList` | GET | `/api/recruitment/vacancy-requests-with-filter` | `recruitment.json` | Список заявок на вакансию |
| `vacancyRequestCreate` | GET | `/api/recruitment/vacancy-requests/create` | `recruitment.json` | Форма добавления заявки на вакансию |
| `vacancyRequestStore` | POST | `/api/recruitment/vacancy-requests` | `recruitment.json` | Добавление заявки на вакансию |
| `vacancyRequestShow` | GET | `/api/recruitment/vacancy-requests/{vacancy_request}` | `recruitment.json` | Детальная страница заявки на вакансию |
| `vacancyRequestUpdate` | PUT | `/api/recruitment/vacancy-requests/{vacancy_request}` | `recruitment.json` | Обновление заявки на вакансию |
| `vacancyRequestDestroy` | DELETE | `/api/recruitment/vacancy-requests/{vacancy_request}` | `recruitment.json` | Удаление запроса на вакансию |
| `vacancyRequestEdit` | GET | `/api/recruitment/vacancy-requests/{vacancy_request}/edit` | `recruitment.json` | Форма редактирования заявки на вакансию |
| `vacancyRequestRecruiterEdit` | GET | `/api/recruitment/vacancy-requests/{vacancy_request}/recruiter/edit` | `recruitment.json` | Форма редактирования рекрутера в заявки на вакансию |
| `vacancyRequestResponsibleEdit` | GET | `/api/recruitment/vacancy-requests/{vacancy_request}/responsible/edit` | `recruitment.json` | Форма редактирования ответственного рекрутера в заявки на вакансию |
| `vacancyRequestRecruiterUpdate` | PUT | `/api/recruitment/vacancy-requests/{vacancy_request}/recruiter` | `recruitment.json` | Обновление рекрутера в заявки на вакансию |
| `vacancyRequestResponsibleUpdate` | PUT | `/api/recruitment/vacancy-requests/{vacancy_request}/responsible` | `recruitment.json` | Обновление ответственного рекрутера в заявки на вакансию |
| `vacancyRequestGetRecruiters` | GET | `/api/recruitment/vacancy-requests/{vacancy_request}/get-recruiters` | `recruitment.json` | Получения списка рекрутеров в заявки на вакансию |
| `vacancyRequestCommentStore` | POST | `/api/recruitment/vacancy-request-comments/{vacancy_request}` | `recruitment.json` | Добавить комментарий |
| `vacancyRequestCommentEdit` | GET | `/api/recruitment/vacancy-request-comments/{comment}/edit` | `recruitment.json` | Форма редактирования комментария |
| `vacancyRequestCommentUpdate` | PUT | `/api/recruitment/vacancy-request-comments/{comment}` | `recruitment.json` | Обновление комментария |
| `vacancyRequestCommentDestroy` | DELETE | `/api/recruitment/vacancy-request-comments/{comment}` | `recruitment.json` | Удаление комментария |
| `vacancyRequestReject` | GET | `/api/recruitment/vacancy-requests/{vacancy_request}/reject` | `recruitment.json` | Отклонение заявки |
| `vacancyRequestApprove` | GET | `/api/recruitment/vacancy-requests/{vacancy_request}/approve` | `recruitment.json` | Согласование заявки |
| `vacancyRequestRemind` | GET | `/api/recruitment/vacancy-requests/{vacancy_request}/remind` | `recruitment.json` | Напоминание о согласовании заявки |
| `vacancyRequestCopy` | POST | `/api/recruitment/vacancy-requests/{request}/copy` | `recruitment.json` | Копирование заявки на вакансию |
| `vacancy-requestsExport` | POST | `/api/recruitment/vacancy-requests/export` | `recruitment.json` | Экспорт списка заявок на подбор |
| `absenceReport` | GET | `/api/reports/absence/users` | `reports.json` | Отчет Баланс отсутствий сотрудников |
| `absenceReportExport` | POST | `/api/reports/absence/users/export` | `reports.json` | Экспорт отчета Баланса отсутствий сотрудников |
| `absencePlanningReportUsers` | GET | `/api/reports/absence-planning/users` | `reports.json` | Отчёт «Планирование отсутствий» |
| `absencePlanningReportExport` | POST | `/api/reports/absence-planning/users/export` | `reports.json` | Экспорт отчёта «Планирование отсутствий» |
| `absenceRequestsReport` | GET | `/api/reports/absence-requests/users` | `reports.json` | Отчет Запросы на отсутствия сотрудников |
| `absenceRequestsReportExport` | POST | `/api/reports/absence-requests/users/export` | `reports.json` | Экспорт отчета Запросы на отсутствия сотрудников |
| `accrualsReportInfo` | GET | `/api/reports/accruals/info` | `reports.json` | Получить агрегированные данные по начислениям |
| `accrualsReportUsers` | GET | `/api/reports/accruals/users` | `reports.json` | Получить агрегированные данные по каждому сотруднику |
| `accrualsReportExport` | POST | `/api/reports/accruals/users/export` | `reports.json` | Экспорт отчета по начислениям |
| `accrualsReportPayList` | GET | `/api/reports/accruals/pay-list` | `reports.json` | Сформировать расчетный лист |
| `ageReport` | GET | `/api/reports/age` | `reports.json` | Отчет Возрастное распределение сотрудников |
| `ageReportUsers` | GET | `/api/reports/age/users` | `reports.json` | Список сотрудников |
| `ageReportUsersExport` | POST | `/api/reports/age/users/export` | `reports.json` | Список сотрудников |
| `assetReport` | GET | `/api/reports/assets` | `reports.json` | Список имущества |
| `assetReportExport` | POST | `/api/reports/assets/export` | `reports.json` | Экпорт списка имущества |
| `CandidateCheckListReport` | GET | `/api/reports/dynamics-check-list` | `reports.json` | Отчет статистики заполнения чек-листов |
| `CandidateCheckListReportUsers` | GET | `/api/reports/dynamics-check-list/users` | `reports.json` | Отчет статистики заполнения чек-листов |
| `CandidateCheckListReportUsersExport` | POST | `/api/reports/dynamics-check-list/users/export` | `reports.json` | Экспорт статистики заполнения чек-листов |
| `candidateDataReportUsers` | GET | `/api/reports/candidate-data/users` | `reports.json` | Данные по кандидатам |
| `candidateDataReportUsersExport` | POST | `/api/reports/candidate-data/users/export` | `reports.json` | Экcпорт данных по кандидатам |
| `timeToDisqualifyReport` | GET | `/api/reports/time-to-disqualify` | `reports.json` | Отчет Сроки до отказа кандидату |
| `timeToDisqualifyUsersReport` | GET | `/api/reports/time-to-disqualify/users` | `reports.json` | Отчет Сроки до отказа кандидату |
| `timeToDisqualifyUsersReportExport` | POST | `/api/reports/time-to-disqualify/users/export` | `reports.json` | Экспорт отчета Сроки до отказа кандидату |
| `timeToHireReport` | GET | `/api/reports/time-to-hire` | `reports.json` | Отчет Сроки найма |
| `timeToHireUsersReport` | GET | `/api/reports/time-to-hire/users` | `reports.json` | Отчет Сроки найма кандидатов |
| `timeToHireUsersReportExport` | POST | `/api/reports/time-to-hire/users/export` | `reports.json` | Экспорт отчета Сроки найма кандидатов |
| `internalHiringReport` | GET | `/api/reports/internal-hiring` | `reports.json` | Отчет по внутреннему найму и реферальной программе |
| `internalHiringUsersReport` | GET | `/api/reports/internal-hiring/users` | `reports.json` | Отчет по внутреннему найму и реферальной программе |
| `preboardingReport` | GET | `/api/reports/preboarding-dinamics` | `reports.json` | Данные для отчёта по игре Самый Умный |
| `preboardingCandidatesReport` | GET | `/api/reports/preboarding-dinamics/users` | `reports.json` | Данные для таблицы |
| `preboardingCandidatesExport` | POST | `/api/reports/preboarding-dynamics/users/export` | `reports.json` | Экспорт отчёта по игре Самый Умный |
| `CandidateRejectReport` | GET | `/api/reports/candidate-reject` | `reports.json` | Статистика отказов |
| `CandidateRejectReportUsers` | GET | `/api/reports/candidate-reject/users` | `reports.json` | Отчет статистика отказов кандидатов |
| `CandidateRejectReportUsersExport` | POST | `/api/reports/candidate-reject/users/export-by-table` | `reports.json` | Экспорт списка статистика отказов кандидатам |
| `CandidateRejectReportByVacancyExport` | POST | `/api/reports/candidate-reject/users/export-by-vacancy` | `reports.json` | Экспорт списка статистика отказов кандидатам по вакансиям |
| `CandidateRejectReportByRecruiterExport` | POST | `/api/reports/candidate-reject/users/export-by-recruiter` | `reports.json` | Экспорт списка статистика отказов кандидатам по рекрутерам |
| `CandidateSourcesReport` | GET | `/api/reports/candidate-sources` | `reports.json` | Отчет кандидатов по источникам |
| `CandidateSourcesDateReport` | GET | `/api/reports/candidate-date` | `reports.json` | Отчет кандидатов по датам |
| `CandidateSourcesReportUsers` | GET | `/api/reports/candidate-sources/users` | `reports.json` | Отчет списка кандидатов по источникам |
| `CandidateSourcesReportUsersExport` | POST | `/api/reports/candidate-sources/users/export` | `reports.json` | Экспорт списка кандидатов по источникам |
| `celebrationsReportUsers` | GET | `/api/reports/celebrations/users` | `reports.json` | Список событий сотрудников |
| `celebrationsReportUsersExport` | POST | `/api/reports/celebrations/users/export` | `reports.json` | Список событий сотрудников |
| `childrenReport` | POST | `/api/reports/children` | `reports.json` | Отчет Дети |
| `cleverestReport` | GET | `/api/reports/cleverest` | `reports.json` | Данные для отчёта по игре Самый Умный |
| `cleverestUsersReport` | GET | `/api/reports/cleverest/users` | `reports.json` | Данные для таблицы |
| `cleverestUsersReportExport` | POST | `/api/reports/cleverest/users/export` | `reports.json` | Экспорт отчёта по игре Самый Умный |
| `reportsList` | GET | `/api/reports` | `reports.json` | Список отчетов |
| `participantStatisticsReportUsers` | GET | `/api/reports/participant-statistics/users` | `reports.json` | Список сотрудников |
| `participantStatisticsReport` | GET | `/api/reports/participant-statistics` | `reports.json` | Отчет Статистика обучающихся |
| `participantStatisticsReportUsersExport` | POST | `/api/reports/participant-statistics/users/export` | `reports.json` | Экспорт Статистики обучающихся |
| `participantDynamicsLearning` | GET | `/api/reports/participant-dynamics/users` | `reports.json` | Отчет Динамика обучения участников |
| `searchCourseForReports` | GET | `/api/reports/participant-dynamics/search-course` | `reports.json` | Поиск курсов |
| `participantDynamicsReport` | GET | `/api/reports/participant-dynamics` | `reports.json` | Динамика процессов обучения |
| `participantDynamicsReportUsersExport` | POST | `/api/reports/participant-dynamics/users/export` | `reports.json` | Экспорт Динамики обучения |
| `currencyStatisticsReportUsers` | GET | `/api/reports/currency-statistics/users` | `reports.json` | Список сотрудников |
| `currencyStatisticsReportUsersExport` | POST | `/api/reports/currency-statistics/users/export` | `reports.json` | Список сотрудников экспорт |
| `questionsReport` | GET | `/api/reports/daily-question/questions` | `reports.json` | Отчет по блоку Вопрос дня |
| `dailyQuestionReportExport` | POST | `/api/reports/daily-question/export` | `reports.json` | Экспорт вопросов в модуле Вопрос дня |
| `groupListUsers_api_reports_daily_question_list_users` | GET | `/api/reports/daily-question/list-users` | `reports.json` | Список пользователей |
| `groupListUsersSuccess` | GET | `/api/reports/daily-question/{question}/correct-answers-list-users` | `reports.json` | Список пользователей ответивших правильно |
| `groupListUsersError` | GET | `/api/reports/daily-question/{question}/incorrect-answers-list-users` | `reports.json` | Список пользователей ответивших не правильно |
| `groupListUsersAllAnswers` | GET | `/api/reports/daily-question/{question}/all-answers-list-users` | `reports.json` | Список пользователей, ответивших на вопрос |
| `employmentReportUsers` | GET | `/api/reports/employment/users` | `reports.json` | Список сотрудников |
| `employmentReportUsersExport` | POST | `/api/reports/employment/users/export` | `reports.json` | Список сотрудников |
| `evaluationsUsers` | GET | `/api/reports/evaluations/users` | `reports.json` | Список пользователей, которые принимали участие в оценке |
| `evaluationUserDetail` | GET | `/api/reports/evaluations/users/{user}/detail` | `reports.json` | Динамика компетенций/эффективности сотрудника |
| `evaluationUserGraph_api_reports_evaluations_users_user_roles_role_types_type_entities_entity_get_graph` | GET | `/api/reports/evaluations/users/{user}/roles/{role}/types/{type}/entities/{entity}/get-graph` | `reports.json` | График с динамикой изменения значений |
| `funnelPipelineReport` | GET | `/api/reports/funnel-pipeline` | `reports.json` | Воронка цикла вакансии |
| `funnelPipelineReportUsers` | GET | `/api/reports/funnel-pipeline/users` | `reports.json` | Кандидаты цикла вакансии |
| `funnelPipelineReportUsersExport` | POST | `/api/reports/funnel-pipeline/users/export` | `reports.json` | Экcпорт воронки цикла вакансии |
| `genderReport` | GET | `/api/reports/gender` | `reports.json` | Отчет Гендерное распределение сотрудников |
| `genderReportUsers` | GET | `/api/reports/gender/users` | `reports.json` | Список сотрудников |
| `genderReportUsersExport` | POST | `/api/reports/gender/users/export` | `reports.json` | Экспорт сотрудников по гендеру |
| `headcountReport` | GET | `/api/reports/headcount` | `reports.json` | Отчет Численность персонала |
| `headcountReportUsers` | GET | `/api/reports/headcount/users` | `reports.json` | Список всех сотрудников за период |
| `headcountReportUsersExport` | POST | `/api/reports/headcount/users/export` | `reports.json` | Экспорт всех сотрудников за период |
| `kpiReport` | GET | `/api/reports/kpi` | `reports.json` | отчет kpi |
| `kpiReportUsers` | GET | `/api/reports/kpi/users/` | `reports.json` | Список пользователей kpi |
| `kpiReportExport` | POST | `/api/reports/kpi/users/export` | `reports.json` | Экcпорт kpi |
| `LeavePolicyReportUsers` | GET | `/api/reports/leave-policy/users/` | `reports.json` | Политики выходных |
| `LeavePolicyReportUsersExport` | POST | `/api/reports/leave-policy/users/export` | `reports.json` | Политики выходных |
| `LeaveUsedReportUsers` | GET | `/api/reports/leave-used/users/` | `reports.json` | Использованные выходные |
| `LeaveUsedReportUsersExport` | POST | `/api/reports/leave-used/users/export` | `reports.json` | Использованные выходные |
| `op_5a25d804b4b5d1122feaebd378fdc90b` | POST | `/api/reports/module-page-views` | `reports.json` | Запись просмотра страницы |
| `monthlySalaryReport` | GET | `/api/reports/payroll` | `reports.json` | отчет зарплат за месяц |
| `monthlySalaryReportUsers` | GET | `/api/reports/payroll/users` | `reports.json` | Список сотрудников |
| `monthlySalaryReportUsersExport` | POST | `/api/reports/payroll/users/export` | `reports.json` | Список сотрудников |
| `offboardingReportUsers` | GET | `/api/reports/offboarding-dynamics/users` | `reports.json` | Статистика по оффбордингу |
| `offboardingDepartmentGraph` | GET | `/api/reports/offboarding-dynamics` | `reports.json` | Данные для графика |
| `offboardingReportUsersExport` | POST | `/api/reports/offboarding-dynamics/users/export` | `reports.json` | Статистика по оффбордингу экспорт |
| `onboardingReportUsers` | GET | `/api/reports/onboarding-dynamics/users` | `reports.json` | Статистика по онбордингу |
| `onboardingDepartmentGraph` | GET | `/api/reports/onboarding-dynamics` | `reports.json` | Данные для графика |
| `onboardingTenureDynamics` | GET | `/api/reports/onboarding-tenure-dynamics` | `reports.json` | Данные по испытательному сроку в онбординге |
| `onboardingReportUsersExport` | POST | `/api/reports/onboarding-dynamics/users/export` | `reports.json` | Статистика по онбордингу экспорт |
| `OneOnOneReportUsers` | GET | `/api/reports/one-on-one/users` | `reports.json` | Список 1-on-1 сотрудников |
| `OneOnOneReportUsersExport` | POST | `/api/reports/one-on-one/users/export` | `reports.json` | Экспорт всех 1-on-1 за период |
| `ownershipReport` | GET | `/api/reports/ownership/users` | `reports.json` | Отчет Владельцы целей |
| `ownershipReportExport` | POST | `/api/reports/ownership/users/export` | `reports.json` | Экспорт отчета Владельцы целей |
| `personalDataDeletionReport` | GET | `/api/reports/personal-data-deletion` | `reports.json` | Отчет Удаление персональных данных |
| `personalDataDeletionReportExport` | POST | `/api/reports/personal-data-deletion/export` | `reports.json` | Экспорт отчета Удаление персональных данных |
| `jobReportUsers` | GET | `/api/reports/job/users` | `reports.json` | Список сотрудников |
| `jobReportUsersExport` | POST | `/api/reports/job/users/export` | `reports.json` | Список сотрудников |
| `recruiterStatistics` | GET | `/api/reports/recruiter-statistics` | `reports.json` | Ключевые показатели статистики рекрутера |
| `recruiterStatisticsUsers` | GET | `/api/reports/recruiter-statistics/users` | `reports.json` | Список рекрутеров или вакансий |
| `recruiterStatisticsExport` | POST | `/api/reports/recruiter-statistics/users/export` | `reports.json` | Экспорт отчёта статистики рекрутера |
| `funnelPipelineWidget` | GET | `/api/reports/pipeline` | `reports.json` | Воронка цикла вакансии |
| `funnelPipelineCandidateWidget` | GET | `/api/reports/pipeline/stage/{stage}/candidates` | `reports.json` | Воронка цикла вакансии |
| `pipelineVacanciesReport` | GET | `/api/reports/pipeline/users` | `reports.json` | Список воронки найма |
| `PipelineVacanciesReportUsersExport` | POST | `/api/reports/pipeline/users/export` | `reports.json` | Экспорт списка воронки найма за период |
| `getRiskZoneMatrix` | GET | `/api/reports/risk-zone` | `reports.json` | Матрица зоны риска |
| `getRiskZoneUsersByBlock` | POST | `/api/risk-zone/block-users` | `reports.json` | Список пользователей по отдельному блоку матрицы |
| `getRiskZoneUsers` | GET | `/api/reports/risk-zone/users` | `reports.json` | Таблица 1-on-1 |
| `oneOnOneAllExport` | POST | `api/reports/risk-zone/users/export` | `reports.json` | Экспорт таблицы встреч |
| `salaryReportUsers` | GET | `/api/reports/salary/users` | `reports.json` | Список сотрудников |
| `salaryReportUsersExport` | POST | `/api/reports/salary/users/export` | `reports.json` | Список сотрудников |
| `securityReport` | GET | `/api/reports/security/users` | `reports.json` | Отчет Аудит безопасности сотрудников |
| `securityReportExport` | POST | `/api/reports/security/users/export` | `reports.json` | Экспорт отчета Аудит безопасности сотрудников |
| `eec5736cd5de177736e93f598f4b946f` | GET | `/api/reports/statistics` | `reports.json` | Получить статистику активности пользователя по модулям |
| `ce6b85aeb6fcdd1702338092f80a3af6` | GET | `/api/reports/statistics/{module}` | `reports.json` | Получить детальную статистику по модулю |
| `op_2d635931e78267b6333ed64dd656f25d` | POST | `/api/reports/module-visits` | `reports.json` | Записать посещение модуля |
| `tasksReport` | GET | `/api/reports/tasks` | `reports.json` | Список задач |
| `tasksReportUsers` | GET | `/api/reports/tasks/users` | `reports.json` | Список пользователей задач |
| `tasksReportExport` | POST | `/api/reports/tasks/users/export` | `reports.json` | Экcпорт списка задач |
| `tenureReport` | GET | `/api/reports/tenure` | `reports.json` | Отчет Стаж работы сотрудников |
| `tenureReportUsers` | GET | `/api/reports/tenure/users` | `reports.json` | Список сотрудников |
| `tenureReportUsersExport` | POST | `/api/reports/tenure/users/export` | `reports.json` | Список сотрудников |
| `testStatisticsIndex` | GET | `/api/reports/test-statistics` | `reports.json` | Общая статистика по тестам |
| `testStatisticsUsers` | GET | `/api/reports/test-statistics/users` | `reports.json` | Список тестов |
| `testStatisticsExport` | POST | `/api/reports/test-statistics/users/export` | `reports.json` | Экспорт списка тестов |
| `testStatisticsShow` | GET | `/api/reports/test-statistics/{materialId}` | `reports.json` | Детальная страница теста |
| `testStatisticsAttempts` | GET | `/api/reports/test-statistics/{materialId}/attempts` | `reports.json` | Список попыток прохождения теста |
| `testStatisticsAttemptsExport` | POST | `/api/reports/test-statistics/{materialId}/attempts/export` | `reports.json` | Экспорт попыток прохождения теста |
| `testStatisticsQuestions` | GET | `/api/reports/test-statistics/{materialId}/questions` | `reports.json` | Статистика по вопросам теста |
| `testStatisticsQuestionsExport` | POST | `/api/reports/test-statistics/{materialId}/questions/export` | `reports.json` | Экспорт статистики по вопросам теста |
| `testStatisticsAnswerers` | GET | `/api/reports/test-statistics/{materialId}/questions/{questionId}/answerers` | `reports.json` | Список сотрудников, ответивших на вопрос |
| `thanksUsersReport` | GET | `/api/reports/thanks/users` | `reports.json` | Отчет благодарностей пользователей |
| `ThanksReportExport` | POST | `/api/reports/thanks/users/export` | `reports.json` | Экспорт отчета по благодарностям пользователей |
| `timeToFillReport` | GET | `/api/reports/time-to-fill` | `reports.json` | Отчет Сроки закрытия вакансии |
| `timeToFillUsersReport` | GET | `/api/reports/time-to-fill/users` | `reports.json` | Отчет Сроки закрытия вакансии |
| `timeToFillUsersReportExport` | POST | `/api/reports/time-to-fill/users/export` | `reports.json` | Экспорт отчета Сроки закрытия вакансии |
| `trainingsReportUsersExport` | POST | `/api/reports/trainings/export` | `reports.json` | Список тренингов |
| `turnoverReport` | GET | `/api/reports/turnover` | `reports.json` | Отчет Текучесть сотрудников |
| `turnoverReportUsers` | GET | `/api/reports/turnover/users` | `reports.json` | Список уволенных сотрудников |
| `turnoverReportUsersExport` | POST | `/api/reports/turnover/users/export` | `reports.json` | Список уволенных сотрудников |
| `userActionsReport` | GET | `/api/reports/actions` | `reports.json` | Отчет Действия пользователя |
| `userActionsReportExport` | POST | `/api/reports/actions/export` | `reports.json` | Экспорт действий пользователя |
| `WorkingHoursReportUsers` | GET | `/api/reports/working-hours/users/` | `reports.json` | Отработанные часы |
| `WorkingHoursReportUsersExport` | POST | `/api/reports/working-hours/users/export` | `reports.json` | Отработанные часы |
| `requestsCatalog` | GET | `/api/requests/catalog` | `requests.json` | Каталог заявок |
| `copyRequest` | GET | `/api/requests/{request}/copy` | `requests.json` | Копирование заявки |
| `requestsList` | GET | `/api/requests` | `requests.json` | Список заявок |
| `requestsListExport` | POST | `/api/requests/export` | `requests.json` | Список заявок |
| `createRequest` | GET | `/api/processes/{process}/requests/create` | `requests.json` | Форма создания заявки |
| `storeRequest` | POST | `/api/processes/{process}/requests` | `requests.json` | Создание заявки |
| `showRequest` | GET | `/api/requests/{request}` | `requests.json` | Просмотр заявки |
| `destroyRequest` | DELETE | `/api/requests/{request}` | `requests.json` | Удаление заявки |
| `delegateRequest` | POST | `/api/requests/{request}/{stage}/delegate` | `requests.json` | Делегирование этапа заявки |
| `delegateRequestForm` | GET | `/api/requests/{request}/delegate` | `requests.json` | Форма делегирования этапа заявки |
| `nextStageRequest` | POST | `/api/requests/next-stage/{stage}` | `requests.json` | Прохождение этапа |
| `feedbackRequest` | POST | `/api/requests/{request}/feedback` | `requests.json` | Обратная связь |
| `stpreStageFieldsRequest` | POST | `/api/requests/{request}/stage-fields` | `requests.json` | Изменение полей первого этапа заявки |
| `destroyRequestFile` | DELETE | `/api/requests/files/{file}` | `requests.json` | Удаление файла |
| `requestsNeedActionCount` | GET | `/api/requests/need-action` | `requests.json` | Количество заявок, требующих действий |
| `processReport` | GET | `/api/processes/{process}/report` | `requests.json` | Отчет по процессу |
| `processFeedbackShow` | GET | `/api/processes/{process}/feedback` | `requests.json` | Обратная связь |
| `editStageObservers` | GET | `/api/requests/{request}/stage/{userRequestStage}/observers/edit` | `requests.json` | Форма редактирования наблюдателей |
| `updateStageObservers` | PUT | `/api/requests/{request}/stages/{stage}/observers` | `requests.json` | Обновление наблюдателей этапа |
| `requestHistoryList` | GET | `/api/requests/{request}/history` | `requests.json` | История заявки |
| `stageCommentStore` | POST | `/api/requests/stages/{stage}/comments` | `requests.json` | Добавление нового комментария |
| `stageCommentEdit` | GET | `/api/requests/comments/{comment}/edit` | `requests.json` | Форма изменения комментария |
| `stageCommentUpdate` | PUT | `/api/requests/comments/{comment}` | `requests.json` | Изменение комментария |
| `stageCommentDestroy` | DELETE | `/api/requests/comments/{comment}` | `requests.json` | Удаление комментария |
| `settingsAbsenceCreate` | GET | `/api/settings/absence-types/{absence-type}/absences/create` | `settings.json` | Данные для добавления политики выходных |
| `settingsAbsenceStore` | POST | `/api/settings/absence-types/{absence-type}/absences` | `settings.json` | Сохранение новой политики выходных |
| `settingsAbsenceEdit` | GET | `/api/settings/absences/{absence}/edit` | `settings.json` | Данные для обновления политики выходных |
| `settingsAbsenceUpdate` | PUT | `/api/settings/absences/{absence}` | `settings.json` | Обновление политики выходных |
| `settingsAbsenceDestroy` | DELETE | `/api/settings/absences/{absence}` | `settings.json` | Удаление существующей политики |
| `settingsAbsenceUpdateDefault` | POST | `/api/settings/absences/{absence}/update-default` | `settings.json` | Обновление признака По умолчанию |
| `settingsAbsenceEmployees` | GET | `/api/settings/absences/{absence}/employees` | `settings.json` | Список сотрудников |
| `getSettingsAbsenceLinks` | GET | `/api/settings/absences/links` | `settings.json` | Данные для страницы Назначение |
| `settingsAbsenceLink` | POST | `/api/settings/absences/links/link` | `settings.json` | Назначение политики выходных |
| `absenceRemains` | GET | `/api/settings/absence-remains` | `settings.json` | Форма для выборки пользователей |
| `absenceRemainsUsers` | POST | `/api/settings/absence-remains/users` | `settings.json` | Список пользователей |
| `absenceRemainsUpdate` | PUT | `/api/settings/absences/{absence}/remains` | `settings.json` | Обновление остатков |
| `absenceRemainsImportForm` | GET | `/api/settings/absence-remains/import` | `settings.json` | Получение формы импорта |
| `absenceRemainsImportUsers` | POST | `/api/settings/absence-remains/import` | `settings.json` | Парсинг файла и получение списка пользователей |
| `absenceRemainsHistory` | GET | `/api/settings/absence-remains/history` | `settings.json` | История импорта |
| `getSettingsAbsenceTypeList` | GET | `/api/settings/absence-types` | `settings.json` | Список типов политик и политики |
| `settingsAbsenceTypeStore` | POST | `/api/settings/absence-types` | `settings.json` | Сохранение нового типа политик выходных |
| `settingsAbsenceTypeCreate` | GET | `/api/settings/absence-types/create` | `settings.json` | Данные для добавления типа политики выходных |
| `absenceTypesFileDestroy` | DELETE | `/api/settings/absence-types/files/{file}` | `settings.json` | Удаление файла политики отсутствия |
| `settingsAbsenceTypeEdit` | GET | `/api/settings/absence-types/{absence-type}/edit` | `settings.json` | Данные для добавления типа политики выходных |
| `settingsAbsenceTypeUpdate` | PUT | `/api/settings/absence-types/{absence-type}` | `settings.json` | Обновление типа политик выходных |
| `settingsAbsenceTypeDestroy` | DELETE | `/api/settings/absence-types/{absence-type}` | `settings.json` | Удаление существующего типа политик |
| `settingsAbsenceTypesUpdateSort` | POST | `/api/settings/absence-types/update-sort` | `settings.json` | Изменение порядка вывода типов политик |
| `getSettingsAssetList` | GET | `/api/settings/assets` | `settings.json` | Список категорий имущества |
| `SettingsAssetStore` | POST | `/api/settings/assets` | `settings.json` | Сохранение новой категории имущества |
| `SettingsAssetCreate` | GET | `/api/settings/assets/create` | `settings.json` | Форма для добавления категории имущества |
| `SettingsAssetEdit` | GET | `/api/settings/assets/{asset}/edit` | `settings.json` | Форма для изменения категории имущества |
| `SettingsAssetUpdate` | PUT | `/api/settings/assets/{asset}` | `settings.json` | Обновление категории имущества |
| `SettingsAssetDestroy` | DELETE | `/api/settings/assets/{asset}` | `settings.json` | Удаление существующего категории имущества |
| `saveOptionAssets` | PUT | `/api/settings/assets/options` | `settings.json` | Сохранение настроек для имущества |
| `getSettingsAuthenticationList` | GET | `/api/settings/authentications` | `settings.json` | Список опций для аутентификации |
| `getSettingsAuthenticationUpdate` | PUT | `/api/settings/authentications` | `settings.json` | Обновление опций аутентификации |
| `settingsImportB24AutoSettingsEdit` | GET | `/api/settings/import-b24-settings` | `settings.json` | Настройки автовыгрузки из Б24 (форма) |
| `settingsImportB24AutoSettingsStore` | POST | `/api/settings/import-b24-settings` | `settings.json` | Сохранение настроек автовыгрузки из Б24 |
| `getSettingsSlideBanner` | GET | `/api/settings/slides` | `settings.json` | Список слайдов |
| `settingsSlideBannerStore` | POST | `/api/settings/slides` | `settings.json` | Сохранение нового слайда |
| `settingsSlideBannerCreate` | GET | `/api/settings/slides/create` | `settings.json` | Новый слайд |
| `settingsSlideBannerEdit` | GET | `/api/settings/slides/{slide}/edit` | `settings.json` | Редактирование существующего слайда |
| `settingsSlideBannerUpdate` | PUT | `/api/settings/slides/{slide}` | `settings.json` | Обновление данных слайда |
| `settingsSlideBannerDestroy` | DELETE | `/api/settings/slides/{slide}` | `settings.json` | Удаление существующего слайда |
| `settingsSlideBannerUpdateSort` | POST | `/api/settings/slides/update-sort` | `settings.json` | Изменение порядка вывода слайдов |
| `settingsSlideBannerPublish` | POST | `/api/settings/slides/{slide}/publish` | `settings.json` | Опубликовать слайд |
| `getSettingsOnboardingList` | GET | `/api/settings/boarding/{type-boarding}` | `settings.json` | Список бордингов |
| `settingsOnboardingStore` | POST | `/api/settings/boarding/{type-boarding}` | `settings.json` | Сохранение нового бординга |
| `settingsOnboardingCreate` | GET | `/api/settings/boarding/{type-boarding}/create` | `settings.json` | Форма для добавления бординга |
| `settingsOnboardingEdit` | GET | `/api/settings/boarding/{boarding}/edit` | `settings.json` | Форма для изменения бординга |
| `settingsOnboardingUpdate` | PUT | `/api/settings/boarding/{boarding}` | `settings.json` | Обновление бординга |
| `settingsOnboardingDestroy` | DELETE | `/api/settings/boarding/{boarding}` | `settings.json` | Удаление существующего бординга |
| `settingsOnboardingCopy` | POST | `/api/settings/boarding/{boarding}/copy` | `settings.json` | Копирование бординга |
| `getSettingsOnboardingLevelList` | GET | `/api/settings/boarding/{boarding}/level` | `settings.json` | Список уровней бординга |
| `settingsOnboardingLevelStore` | POST | `/api/settings/boarding/{boarding}/level` | `settings.json` | Сохранение нового уровня |
| `settingsOnboardingLevelCreate` | GET | `/api/settings/boarding/{boarding}/level/create` | `settings.json` | Форма для добавления нового уровня |
| `settingsLevelEdit` | GET | `/api/settings/boarding/level/{level}/edit` | `settings.json` | Форма для изменения уровня |
| `settingsOnboardingStepStore` | POST | `/api/settings/boarding/level/{level}` | `settings.json` | Сохранение нового этапа |
| `settingsOnboardingLevelUpdate` | PUT | `/api/settings/boarding/level/{level}` | `settings.json` | Обновление уровня |
| `settingsOnboardingLevelDestroy` | DELETE | `/api/settings/boarding/level/{level}` | `settings.json` | Удаление  существующего уровня |
| `setSettingsOnboardingLevelSort` | POST | `/api/settings/boarding/{boarding}/level/sort` | `settings.json` | Сортировка уровней бординга |
| `settingsBoardingLevelSyncPreview` | GET | `/api/settings/boarding/level/sync-preview` | `settings.json` | Предпросмотр получателей синхронизации уровня |
| `getSettingsPerconalBoarding` | GET | `/api/settings/boarding-process/personals` | `settings.json` | Таблица персональных программ |
| `settingsBoardingPersonalProgram` | POST | `/api/settings/boarding-process/personals` | `settings.json` | Сохранение новой персональной программы |
| `settingsPerconalBoardingCreate` | GET | `/api/settings/boarding-process/personals/create` | `settings.json` | Новая персональная программа |
| `settingsPerconalBoardingEdit` | GET | `/api/settings/boarding-process/personals/{personal}/edit` | `settings.json` | Редактирование существующей персональной программы |
| `settingsPerconalBoardingUpdate` | PUT | `/api/settings/boarding-process/personals/{personal}` | `settings.json` | Обновление персональной программы |
| `settingsPerconalBoardingDestroy` | DELETE | `/api/settings/boarding-process/personals/{personal}` | `settings.json` | Удаление персональной программы |
| `getSettingsBoardingProcess` | GET | `/api/settings/boarding-process` | `settings.json` | Настройки процесса |
| `settingsBoardingProcessUpdate` | PUT | `/api/settings/boarding-process` | `settings.json` | Обновление Настроек процесса |
| `getSettingsOnboardingLevelStepList` | GET | `/api/settings/boarding/level/{level}/step` | `settings.json` | Список этапов уровня |
| `settingsOnboardinStepCreate` | GET | `/api/settings/boarding/level/{level}/step/type/{type}/create` | `settings.json` | Форма для добавления этапа |
| `settingsStepEdit` | GET | `/api/settings/boarding/level/step/{step}/edit` | `settings.json` | Форма для изменения этапа |
| `settingsOnboardinStepUpdate` | PUT | `/api/settings/boarding/level/step/{step}` | `settings.json` | Обновление этапа |
| `settingsOnboardingStepDestroy` | DELETE | `/api/settings/boarding/level/step/{step}` | `settings.json` | Удаление этапа |
| `setSettingsOnboardingLevelStepSort` | POST | `/api/settings/boarding/level/{level}/step/sort` | `settings.json` | Список этапов уровня |
| `settingsBoardingStepSyncPreview` | GET | `/api/settings/boarding/level/step/sync-preview` | `settings.json` | Предпросмотр получателей синхронизации этапа |
| `getSettingsCalendarList` | GET | `/api/settings/calendars` | `settings.json` | Список опций для календаря |
| `getSettingsCalendarUpdate` | PUT | `/api/settings/calendars` | `settings.json` | Обновление опций календаря |
| `getSettingsCandidateLevel` | GET | `/api/settings/candidate-levels` | `settings.json` | Список уровней |
| `settingsCandidateLevelStore` | POST | `/api/settings/candidate-levels` | `settings.json` | Сохранение нового уровня |
| `settingsCandidateLevelCreate` | GET | `/api/settings/candidate-levels/create` | `settings.json` | Новый уровень |
| `settingsCandidateLevelEdit` | GET | `/api/settings/candidate-levels/{candidate_level}/edit` | `settings.json` | Редактирование существующего уровня |
| `settingsCandidateLevelUpdate` | PUT | `/api/settings/candidate-levels/{candidate_level}` | `settings.json` | Обновление данных уровня |
| `settingsCandidateLevelDestroy` | DELETE | `/api/settings/candidate-levels/{candidate_level}` | `settings.json` | Удаление существующего уровня |
| `getSettingsCandidateLocationList` | GET | `/api/settings/candidate-locations` | `settings.json` | Список локаций |
| `settingsCandidateLocationStore` | POST | `/api/settings/candidate-locations` | `settings.json` | Сохранение новой локации |
| `settingsCandidateLocationCreate` | GET | `/api/settings/candidate-locations/create` | `settings.json` | Новая локация |
| `settingsCandidateLocationEdit` | GET | `/api/settings/candidate-locations/{candidate-location}/edit` | `settings.json` | Существующая локация |
| `settingsCandidateLocationUpdate` | PUT | `/api/settings/candidate-locations/{candidate-location}` | `settings.json` | Обновление существующей локации |
| `settingsCandidateLocationDestroy` | DELETE | `/api/settings/candidate-locations/{candidate-location}` | `settings.json` | Удаление существующей локации |
| `settingsRejectionReasonCreate` | GET | `/api/settings/pipelines/{pipeline}/rejection-reasons/create` | `settings.json` | Новая причина отказа |
| `settingsRejectionReasonStore` | POST | `/api/settings/pipelines/{pipeline}/rejection-reasons` | `settings.json` | Сохранение новой причины |
| `settingsRejectionReasonEdit` | GET | `/api/settings/rejection-reasons/{rejection_reason}/edit` | `settings.json` | Редактирование существующей причины |
| `settingsRejectionReasonUpdate` | PUT | `/api/settings/rejection-reasons/{rejection_reason}` | `settings.json` | Обновление данных причины |
| `settingsRejectionReasonDestroy` | DELETE | `/api/settings/rejection-reasons/{rejection_reason}` | `settings.json` | Удаление существующего уровня |
| `settingsRejectionReasonSort` | POST | `/api/settings/pipelines/{pipeline}/rejection-reasons/sort` | `settings.json` | Сортировка причин отказа кандидату |
| `getSettingsCandidateTag` | GET | `/api/settings/candidate-tags` | `settings.json` | Список тегов |
| `settingsCandidateTagStore` | POST | `/api/settings/candidate-tags` | `settings.json` | Сохранение нового тега |
| `settingsCandidateTagUpdate` | PUT | `/api/settings/candidate-tags` | `settings.json` | Обновление данных тегов |
| `settingsCandidateTagCreate` | GET | `/api/settings/candidate-tags/create` | `settings.json` | Новый тег |
| `settingsCandidateTagEdit` | GET | `/api/settings/candidate-tags/{candidate_tag}/edit` | `settings.json` | Редактирование существующего тега |
| `settingsCandidateTagDestroy` | DELETE | `/api/settings/candidate-tags/{candidate_tag}` | `settings.json` | Удаление существующего тега |
| `careerSite_api_settings_career_site` | GET | `/api/settings/career-site` | `settings.json` | Форма настроек |
| `careerSiteUpdate` | PUT | `/api/settings/career-site` | `settings.json` | Сохранение настроек |
| `checkListPointCreate` | GET | `/api/settings/check-list-templates/sections/{section}/point-type/{type}/create` | `settings.json` | Поля для создания пункта |
| `checkListPointStore` | POST | `/api/settings/check-list-templates/sections/{section}/point-type/{type}/points` | `settings.json` | Сохранение пункта |
| `checkListPointEdit` | GET | `/api/settings/check-list-templates/points/{point}/edit` | `settings.json` | Поля для редактирования пункта |
| `checkListPointUpdate` | PUT | `/api/settings/check-list-templates/points/{point}` | `settings.json` | Обновление пункта |
| `checkListPointDestroy` | DELETE | `/api/settings/check-list-templates/points/{point}` | `settings.json` | Удаление пункта |
| `checkListPointCopy` | POST | `/api/settings/check-list-templates/points/{point}/copy` | `settings.json` | Копирование пункта |
| `checkListPointSort` | PUT | `/api/settings/check-list-templates/sections/{section}/points-sort` | `settings.json` | Сортировка пунктов |
| `checkListSectionCreate` | GET | `/api/settings/check-list-templates/sections/create` | `settings.json` | Поля для создания раздела |
| `checkListSectionStore` | POST | `/api/settings/check-list-templates/{template}/sections` | `settings.json` | Создание раздела |
| `checkListSectionEdit` | GET | `/api/settings/check-list-templates/sections/{section}/edit` | `settings.json` | Редактирование раздела |
| `checkListSectionUpdate` | PUT | `/api/settings/check-list-templates/sections/{section}` | `settings.json` | Обновление раздела |
| `checkListSectionDestroy` | DELETE | `/api/settings/check-list-templates/sections/{section}` | `settings.json` | Удаление раздела |
| `checkListSectionSort` | POST | `/api/settings/check-list-templates/{template}/sort-sections` | `settings.json` | Сортировка разделов опроса |
| `getSettingsCheckListTemplates` | GET | `/api/settings/check-list-templates` | `settings.json` | Список шаблонов чек-листов |
| `SettingsCheckListTemplatesStore` | POST | `/api/settings/check-list-templates` | `settings.json` | Сохранение нового шаблона |
| `settingsCheckListTemplatesCreate` | GET | `/api/settings/check-list-templates/create` | `settings.json` | Новый шаблон чек-листа |
| `SettingsCheckListTemplatesCopy` | GET | `/api/settings/check-list-templates/{template}/copy` | `settings.json` | Копирование шаблона |
| `SettingsCheckListTemplatesEdit` | GET | `/api/settings/check-list-templates/{template}/edit` | `settings.json` | Редактирование существующего шаблона |
| `settingsCheckListUpdate` | PUT | `/api/settings/check-list-templates/{check-list-templates}` | `settings.json` | Обновление данных шаблон |
| `settingsCheckListTemplatesDestroy` | DELETE | `/api/settings/check-list-templates/{template}` | `settings.json` | Удаление существующего шаблона |
| `checkListQuestionListEdit` | GET | `/api/settings/check-list-templates/{template}/edit-questions-list` | `settings.json` | Поля для редактирования шаблона - Вопросы |
| `checkListQuestionListPreview` | GET | `/api/settings/check-list-templates/{template}/preview` | `settings.json` | Предпросмотр |
| `getCleverestSettings` | GET | `/api/settings/cleverest` | `settings.json` | Список настроек игры Самый Умный |
| `updateCleverestSettings` | PUT | `/api/settings/cleverest` | `settings.json` | Обновление настроек игры Самый Умный |
| `getSettingsCompensationList` | GET | `/api/settings/compensations` | `settings.json` | Список видов начислений |
| `settings_ompensationStore` | POST | `/api/settings/compensations` | `settings.json` | Сохранение нового вида начисления |
| `settings_ompensationCreate` | GET | `/api/settings/compensations/create` | `settings.json` | Данные для добавления вида начисления |
| `settings_ompensationEdit` | GET | `/api/settings/compensations/{compensation}/edit` | `settings.json` | Поля для редактирования вида начисления |
| `settings_ompensationUpdate` | PUT | `/api/settings/compensations/{compensation}` | `settings.json` | Обновление вида начисления |
| `settings_ompensationDestroy` | DELETE | `/api/settings/compensations/{compensation}` | `settings.json` | Удаление вида начисления |
| `settings_ompensationSort` | POST | `/api/settings/compensations-sort` | `settings.json` | Сортировка видов начислений |
| `settings_ompensationActive` | POST | `/api/settings/compensations/{compensation}/active` | `settings.json` | Активация\деактивация вида начисления |
| `getSettingsCompetenciesList` | GET | `/api/settings/competencies` | `settings.json` | Список компетенций |
| `settingsCompetencyStore` | POST | `/api/settings/competencies` | `settings.json` | Сохранение новой компетенции |
| `settingsCompetencyCreate` | GET | `/api/settings/competency-groups/{group}/competencies/create` | `settings.json` | Данные для добавления компетенции |
| `settingsCompetencyEdit` | GET | `/api/settings/competencies/{competency}/edit` | `settings.json` | Данные компетенции |
| `settingsCompetencyUpdate` | PUT | `/api/settings/competencies/{competency}` | `settings.json` | Обновление компетенции |
| `settingsCompetencyDestroy` | DELETE | `/api/settings/competencies/{competency}` | `settings.json` | Удаление существующей компетенции |
| `settingsCompetencySort` | POST | `/api/settings/competency-groups/{group}/competencies-sort` | `settings.json` | Сортировка компетенций внутри группы |
| `settingsCompetencyCopy` | POST | `/api/settings/competencies/{competency}/copy` | `settings.json` | Копирование компетенции |
| `getSettingsLevelTemplatesList` | GET | `/api/settings/competencies/level-templates-list` | `settings.json` | Получение шаблонов уровней освоения компетенции/индикатора |
| `editCompetencyQuestions` | GET | `/api/settings/competencies/{competency}/edit-questions` | `settings.json` | Редактирование вопросов компетенции |
| `updateCompetencyQuestions` | PUT | `/api/settings/competencies/{competency}/update-questions` | `settings.json` | Обновление вопросов компетенции |
| `destroyCompetencyQuestions` | DELETE | `/api/settings/competencies/{competency}/destroy-questions` | `settings.json` | Удаление вопросов компетенции |
| `publishCompetencyQuestions` | POST | `/api/settings/competencies/{competency}/publish-questions` | `settings.json` | Публикация вопросов компетенции |
| `settingsCompetencyGroupsList` | GET | `/api/settings/competency-groups` | `settings.json` | Список групп компетенций |
| `settingsCompetencyGroupStore` | POST | `/api/settings/competency-groups` | `settings.json` | Сохранение новой группы компетенций |
| `settingsCompetencyGroupCreate` | GET | `/api/settings/competency-groups/create` | `settings.json` | Данные для добавления группы компетенции |
| `settingsCompetencyGroupEdit` | GET | `/api/settings/competency-groups/{group}/edit` | `settings.json` | Данные группы компетенций |
| `settingsCompetencyGroupUpdate` | PUT | `/api/settings/competency-groups/{group}` | `settings.json` | Обновление компетенции |
| `settingsCompetencyGroupDestroy` | DELETE | `/api/settings/competency-groups/{group}` | `settings.json` | Удаление существующей группы |
| `settingsCompetencyGroupSort` | POST | `/api/settings/competency-groups/sort` | `settings.json` | Сортировка групп компетенций |
| `settingsCompetencyIndicatorCreate` | GET | `/api/settings/competencies/{competency}/indicators/create` | `settings.json` | Данные для добавления индикатора компетенции |
| `settingsCompetencyIndicatorStore` | POST | `/api/settings/competency-indicators` | `settings.json` | Сохранение новой индикатора компетенции |
| `settingsCompetencyIndicatorEdit` | GET | `/api/settings/competency-indicators/{indicator}/edit` | `settings.json` | Данные индикатора компетенции |
| `settingsCompetencyIndicatorUpdate` | PUT | `/api/settings/competency-indicators/{indicator}` | `settings.json` | Обновление индикатора компетенции |
| `settingsCompetencyIndicatorDestroy` | DELETE | `/api/settings/competency-indicators/{indicator}` | `settings.json` | Удаление существующей индикатора компетенции |
| `settingsCompetencyIndicatorSort` | POST | `/api/settings/competencies/{competency}/indicators-sort` | `settings.json` | Сортировка индикаторов внутри компетенции |
| `settingsCompetencyIndicatorCopy` | POST | `/api/settings/competency-indicators/{indicator}/copy` | `settings.json` | Копирование индикатора |
| `editCompetencyIndicatorQuestions` | GET | `/api/settings/competency-indicators/{indicator}/edit-questions` | `settings.json` | Редактирование вопросов индикатора |
| `updateCompetencyIndicatorQuestions` | PUT | `/api/settings/competency-indicators/{indicator}/update-questions` | `settings.json` | Обновление вопросов индикатора |
| `destroyCompetencyIndicatorQuestions` | DELETE | `/api/settings/competency-indicators/{indicator}/destroy-questions` | `settings.json` | Удаление вопросов индикатора |
| `publishCompetencyIndicatorQuestions` | POST | `/api/settings/competency-indicators/{indicator}/publish-questions` | `settings.json` | Публикация вопросов индикатора |
| `getSettingsCompetenciesLevelList` | GET | `/api/settings/competency-level-templates` | `settings.json` | Список уровней освоения комптенции |
| `settingsCompetencyLevelStore` | POST | `/api/settings/competency-level-templates` | `settings.json` | Сохранение новой шаблона уровней освоения компетенции |
| `settingsCompetencyLevelCreate` | GET | `/api/settings/competency-level-templates/create` | `settings.json` | Данные для добавления шаблона уровней освоения компетенции |
| `settingsCompetencyLevelEdit` | GET | `/api/settings/competency-level-templates/{template}/edit` | `settings.json` | Данные шаблона уровней освоения компетенции |
| `settingsCompetencyLevelUpdate` | PUT | `/api/settings/competency-level-templates/{template}` | `settings.json` | Обновление шаблона уровней освоения компетенции |
| `settingsCompetencyLevelDestroy` | DELETE | `/api/settings/competency-level-templates/{template}` | `settings.json` | Удаление существующей шаблона уровней освоения компетенции |
| `competencyMaterialsCreate` | GET | `/api/settings/competencies/materials/create` | `settings.json` | Форма добавления материалов |
| `competencyMaterialsStore` | POST | `/api/settings/competencies/materials` | `settings.json` | Форма добавления материалов |
| `materialEdit` | GET | `/api/settings/competencies/materials/{material}/edit` | `settings.json` | Форма редактирования материала компетенции/индикатора |
| `competencyMaterialsUpdate` | PUT | `/api/settings/competencies/materials/{material}` | `settings.json` | Форма добавления материалов |
| `competencyMaterialsDestroy` | DELETE | `/api/settings/competencies/materials/{material}` | `settings.json` | Удаление материала |
| `getSettingsList` | GET | `/api/settings` | `settings.json` | Список настроек по группам |
| `gamificationSettingsList` | GET | `/api/settings/gamification/settings` | `settings.json` | Настройки валюты |
| `gamificationSettingsStore_api_settings_gamification_settings` | PUT | `/api/settings/gamification/settings` | `settings.json` | Настройки валюты |
| `getSettingsDismissalReasonsList` | GET | `/api/settings/dismissal-reasons` | `settings.json` | Список причин увольнения |
| `settingsDismissalReasonsStore` | POST | `/api/settings/dismissal-reasons` | `settings.json` | Сохранение новой причины увольнения |
| `settingsDismissalReasonsCreate` | GET | `/api/settings/dismissal-reasons/create` | `settings.json` | Новая причина увольнения |
| `settingsDismissalReasonsEdit` | GET | `/api/settings/dismissal-reasons/{dismissal-reason}/edit` | `settings.json` | Существующая причина увольнения |
| `settingsDismissalReasonsUpdate` | PUT | `/api/settings/dismissal-reasons/{dismissal-reason}` | `settings.json` | Обновление существующей причины увольнения |
| `settingsDismissalReasonsDestroy` | DELETE | `/api/settings/dismissal-reasons/{dismissal-reason}` | `settings.json` | Удаление существующей причины увольнения |
| `getSettingsDismissalTypesList` | GET | `/api/settings/dismissal-types` | `settings.json` | Список типов увольнения |
| `settingsDismissalTypesStore` | POST | `/api/settings/dismissal-types` | `settings.json` | Сохранение нового типа увольнения |
| `settingsDismissalTypesCreate` | GET | `/api/settings/dismissal-types/create` | `settings.json` | Новый тип увольнения |
| `settingsDismissalTypesEdit` | GET | `/api/settings/dismissal-types/{dismissal-type}/edit` | `settings.json` | Существующий тип увольнения |
| `settingsDismissalTypesUpdate` | PUT | `/api/settings/dismissal-types/{dismissal-type}` | `settings.json` | Обновление существующего типа увольнения |
| `settingsDismissalTypesDestroy` | DELETE | `/api/settings/dismissal-types/{dismissal-type}` | `settings.json` | Удаление существующего типа увольнения |
| `getSettingsDivisionList` | GET | `/api/settings/divisions` | `settings.json` | Список подразделений |
| `getSettingsDivisionStore` | POST | `/api/settings/divisions` | `settings.json` | Сохранение нового Юрлица |
| `getSettingsDivisionCreate` | GET | `/api/settings/divisions/create` | `settings.json` | Форма для добавления Юрлица |
| `getSettingsDivisionEdit` | GET | `/api/settings/divisions/{division}/edit` | `settings.json` | Форма для изменения Юрлица |
| `getSettingsDivisionUpdate` | PUT | `/api/settings/divisions/{division}` | `settings.json` | Обновление Юрлица |
| `getSettingsDivisionDestroy` | DELETE | `/api/settings/divisions/{division}` | `settings.json` | Удаление существующего Юрлица |
| `getPositionByUser` | GET | `/api/settings/get-position-by-user` | `settings.json` | Получение должности пользователя |
| `getEDMSDocumentTypes1C` | GET | `/api/settings/edms/document-types-1c` | `settings.json` | Список видов документов 1С |
| `getEDMSDocumentType1CStore` | POST | `/api/settings/edms/document-types-1c` | `settings.json` | Создание типа документа 1С |
| `getEDMSDocumentType1CCreate` | GET | `/api/settings/edms/document-types-1c/create` | `settings.json` | Форма создания типа документа 1С |
| `getEDMSDocumentType1CEdit` | GET | `/api/settings/edms/document-types-1c/{type}/edit` | `settings.json` | Поля для формы редактирования типа документа 1С |
| `getEDMSDocumentType1CUpdate` | PUT | `/api/settings/edms/document-types-1c/{type}` | `settings.json` | Обновление типа документа 1С |
| `getEDMSDocumentType1CDesctroy` | DELETE | `/api/settings/edms/document-types-1c/{type}` | `settings.json` | Удаление типа документа 1С |
| `getEDMSDocumentTypes` | GET | `/api/settings/edms/document-types` | `settings.json` | Список типов документов |
| `getEDMSDocumentTypeStore` | POST | `/api/settings/edms/document-types` | `settings.json` | Создание типа документа |
| `getEDMSDocumentTypeCreate` | GET | `/api/settings/edms/document-types/create` | `settings.json` | Форма создания типа документа |
| `getEDMSDocumentTypeEdit` | GET | `/api/settings/edms/document-types/{type}/edit` | `settings.json` | Поля для формы редактирования типа документа |
| `getEDMSDocumentTypeUpdate` | PUT | `/api/settings/edms/document-types/{type}` | `settings.json` | Обновление типа документа |
| `getEDMSDocumentTypeShow` | PUT | `/api/settings/edms/document-types/{type}/show` | `settings.json` | Показывать/скрывать тип документа |
| `getSettingsDriversList` | GET | `/api/settings/drivers` | `settings.json` | Список драйверов |
| `driverStore` | POST | `/api/settings/drivers` | `settings.json` | Сохранение нового драйвера |
| `driverCreate` | GET | `/api/settings/drivers/create` | `settings.json` | Форма для добавления драйвера |
| `driverEdit` | GET | `/api/settings/drivers/{driver}/edit` | `settings.json` | Форма для изменения драйвера |
| `driverUpdate` | PUT | `/api/settings/drivers/{driver}` | `settings.json` | Обновление драйвера |
| `driverDestroy` | DELETE | `/api/settings/drivers/{driver}` | `settings.json` | Удаление существующего драйвера |
| `getSettingsEmploymentTypeList` | GET | `/api/settings/employment-types` | `settings.json` | Список доступных видов занятости |
| `getSettingsEmploymentTypeStore` | POST | `/api/settings/employment-types` | `settings.json` | Сохранение нового вида занятости |
| `getSettingsEmploymentTypeCreate` | GET | `/api/settings/employment-types/create` | `settings.json` | Форма для добавления вида занятости |
| `getSettingsEmploymentTypeEdit` | GET | `/api/settings/employment-types/{employment-type}/edit` | `settings.json` | Форма для изменения вида занятости |
| `getSettingsEmploymentTypeUpdate` | PUT | `/api/settings/employment-types/{employment-type}` | `settings.json` | Обновление вида занятости |
| `getSettingsEmploymentTypeDestroy` | DELETE | `/api/settings/employment-types/{employment-type}` | `settings.json` | Удаление существующего вида занятости |
| `settingsExchange1CEdit` | GET | `/api/settings/exchange1c/edit` | `settings.json` | Настройки обмена с 1С |
| `settingsExchange1CUpdate` | POST | `/api/settings/exchange1c` | `settings.json` | Обновление настроек обмена с 1С |
| `settingsExchange1CHistory` | GET | `/api/settings/exchange1c/history` | `settings.json` | История обмена с 1С |
| `settingsExchange1cHistoryTypes` | GET | `/api/settings/exchange1c/history-types` | `settings.json` | Типы операций истории обмена |
| `settingsFtpImportSettingsEdit` | GET | `/api/settings/ftp-import-settings` | `settings.json` | Получение настроек FTP импорта |
| `settingsFtpImportSettingsStore` | POST | `/api/settings/ftp-import-settings` | `settings.json` | Сохранение настроек FTP импорта |
| `settingsFtpImportSettingsDestroy` | DELETE | `/api/settings/ftp-import-settings` | `settings.json` | Удаление настроек FTP импорта |
| `getSettingsGeneralList` | GET | `/api/settings/general` | `settings.json` | Общие настройки |
| `settingsGeneralUpdate` | POST | `/api/settings/general` | `settings.json` | Обновление общих настроек |
| `getSettingsHolidayList` | GET | `/api/settings/holiday-policies/{holiday-policy}/holidays` | `settings.json` | Список праздников |
| `settingsHolidayStore` | POST | `/api/settings/holiday-policies/{holiday-policy}/holidays` | `settings.json` | Сохранение нового праздника |
| `settingsHolidayCreate` | GET | `/api/settings/holiday-policies/{holiday-policy}/holidays/create` | `settings.json` | Форма для добавления праздника |
| `settingsHolidayEdit` | GET | `/api/settings/holidays/{holiday}/edit` | `settings.json` | Форма для изменения праздника |
| `settingsHolidayUpdate` | PUT | `/api/settings/holidays/{holiday}` | `settings.json` | Обновление праздника |
| `settingsHolidayDestroy` | DELETE | `/api/settings/holidays/{holiday}` | `settings.json` | Удаление существующего праздников |
| `settingsHolidayUpload` | GET | `/api/settings/holiday-policies/{holiday-policy}/upload` | `settings.json` | Загрузка праздников |
| `getSettingsHolidayPolicyList` | GET | `/api/settings/holiday-policies` | `settings.json` | Список политики праздников |
| `settingsHolidayPolicyStore` | POST | `/api/settings/holiday-policies` | `settings.json` | Сохранение новой политики праздников |
| `settingsHolidayPolicyCreate` | GET | `/api/settings/holiday-policies/create` | `settings.json` | Форма для добавления политики праздников |
| `settingsHolidayPolicyEdit` | GET | `/api/settings/holiday-policies/{holiday-policy}/edit` | `settings.json` | Форма для изменения политики праздников |
| `settingsHolidayPolicyUpdate` | PUT | `/api/settings/holiday-policies/{holiday-policy}` | `settings.json` | Обновление политики праздников |
| `settingsHolidayPolicyDestroy` | DELETE | `/api/settings/holiday-policies/{holiday-policy}` | `settings.json` | Удаление существующей политики праздников |
| `settingsHolidayPolicyAssignForm` | GET | `/api/settings/holiday-policies/assign/form` | `settings.json` | Назначение сотрудников на существующую политику праздников |
| `settingsHolidayPolicyAssign` | PUT | `/api/settings/holiday-policies/{holiday-policy}/assign` | `settings.json` | Назначение сотрудников на существующую политику праздников |
| `getSettingsHomeList` | GET | `/api/settings/home` | `settings.json` | Настройки для главной страницы |
| `settingsHomeUpdate` | POST | `/api/settings/home` | `settings.json` | Обновление настроек для главной страницы |
| `getSettingsIdeaCategory` | GET | `/api/settings/idea-categories` | `settings.json` | Список категорий |
| `settingsIdeaCategoryStore` | POST | `/api/settings/idea-categories` | `settings.json` | Сохранение новой категории |
| `settingsIdeaCategoryCreate` | GET | `/api/settings/idea-categories/create` | `settings.json` | Новая категория |
| `settingsIdeaCategoryEdit` | GET | `/api/settings/idea-categories/{idea_category}/edit` | `settings.json` | Редактирование существующей категории |
| `settingsIdeaCategoryUpdate` | PUT | `/api/settings/idea-categories/{idea_category}` | `settings.json` | Обновление данных категории |
| `settingsIdeaCategoryDestroy` | DELETE | `/api/settings/idea-categories/{idea_category}` | `settings.json` | Удаление существующей категории |
| `settingsIdeaUpdateSort` | POST | `/api/settings/idea-categories/update-sort` | `settings.json` | Изменение порядка вывода Категорий |
| `settingsImport` | GET | `/api/settings/import` | `settings.json` | Данные для страницы Импорт |
| `settingsImportB24` | GET | `/api/settings/import-b24` | `settings.json` | История импорта из Б24 |
| `settingsImportCandidates` | GET | `/api/settings/import-candidates` | `settings.json` | История импорта кандидатов |
| `settingsImportList` | POST | `/api/settings/import/temp_employees` | `settings.json` | Данные загруженного файла |
| `settingsImportUploadEmployee` | POST | `/api/settings/import/upload/employee` | `settings.json` | Импорт данных сотрудника |
| `settingsImportB24UploadEmployee` | POST | `/api/settings/import-b24/temp_employees` | `settings.json` | Импорт данных сотрудника |
| `settingsImportDownloadFile` | GET | `/api/settings/import/download/{history}` | `settings.json` | Скачивание файла загрузки |
| `SyncUsersFromB24` | POST | `/api/settings/import/sync-temp-users-from-b24` | `settings.json` | Синхронизация из б24 |
| `importCandidates` | POST | `/api/settings/imports-candidates` | `settings.json` | Импорт кандидатов из xlsx файла |
| `op_1610f5975ec0b0c65fdad8545aeb1555` | GET | `/api/settings/import/temp_employees/{import_id}` | `settings.json` | Получение списка временных сотрудников |
| `a85c4de6c297281771e39bfb64eeaa5b` | PUT | `/api/settings/import/temp_employees/{import_id}/{id}` | `settings.json` | Обновление временного сотрудника |
| `d8d1353ddbf74d0e58e93338189990f1` | DELETE | `/api/settings/import/temp_employees/{import_id}/{id}` | `settings.json` | Удаление временного сотрудника |
| `getSettingsImportanceReasonsList` | GET | `/api/settings/one-on-one-importance-reasons` | `settings.json` | Причины ценности сотрудников |
| `settingsImportanceReasonStore` | POST | `/api/settings/one-on-one-importance-reasons` | `settings.json` | Сохранение новой причины ценности |
| `importanceReasonCreate` | GET | `/api/settings/one-on-one-importance-reasons/create` | `settings.json` | Новая причина ценности |
| `importanceReasonEdit` | GET | `/api/settings/one-on-one-importance-reasons/{one_on_one_importance_reason}/edit` | `settings.json` | Существующая причина ценности |
| `settingsImportanceReasonUpdate` | PUT | `/api/settings/one-on-one-importance-reasons/{one_on_one_importance_reason}` | `settings.json` | Обновление существующей причины ценности |
| `settingsImportanceReasonDestroy` | DELETE | `/api/settings/one-on-one-importance-reasons/{one_on_one_importance_reason}` | `settings.json` | Удаляет причину ценности |
| `InterviewTemplateList` | GET | `/api/settings/interview-templates` | `settings.json` | Список шаблонов собеседований |
| `InterviewTemplatetore` | POST | `/api/settings/interview-templates` | `settings.json` | Сохранение нового шаблона собеседования |
| `InterviewTemplateCreate` | GET | `/api/settings/interview-templates/create` | `settings.json` | Новый шаблон собеседования |
| `InterviewTemplateShow` | GET | `/api/settings/interview-templates/{interview-template}` | `settings.json` | Детальная шаблона собеседования |
| `InterviewTemplateUpdate` | PUT | `/api/settings/interview-templates/{interview-template}` | `settings.json` | Обновление существующего шаблона собеседования |
| `InterviewTemplateDestroy` | DELETE | `/api/settings/interview-templates/{interview-template}` | `settings.json` | Удаление существующего шаблона собеседования |
| `InterviewTemplateEdit` | GET | `/api/settings/interview-templates/{interview-template}/edit` | `settings.json` | Существующая шаблон собеседования |
| `settingsLicenseInfo` | GET | `/api/settings/licence` | `settings.json` | Вывод данных, зависящих от лицензии |
| `settingsLicenseUpload` | POST | `/api/settings/licence` | `settings.json` | Загрузка файла лицензии |
| `settingsLicenseTest` | GET | `/api/settings/licence/test` | `settings.json` | Диагностика приложения |
| `getSettingsLocationList` | GET | `/api/settings/location` | `settings.json` | Список локаций |
| `settingsLocationStore` | POST | `/api/settings/location` | `settings.json` | Сохранение новой локации |
| `settingsLocationCreate` | GET | `/api/settings/location/create` | `settings.json` | Новая локация |
| `settingsLocationEdit` | GET | `/api/settings/location/{location}/edit` | `settings.json` | Существующая локация |
| `settingsLocationUpdate` | PUT | `/api/settings/location/{location}` | `settings.json` | Обновление существующей локации |
| `settingsLocationDestroy` | DELETE | `/api/settings/location/{location}` | `settings.json` | Удаление существующей локации |
| `candidateMailTemplatesList` | GET | `/api/settings/candidate-mail-templates` | `settings.json` | Список почтовых шаблонов кандидату |
| `candidateMailTemplatesStore` | POST | `/api/settings/candidate-mail-templates` | `settings.json` | Сохранение нового шаблона кандидату |
| `candidateMailTemplatesCreate` | GET | `/api/settings/candidate-mail-templates/create` | `settings.json` | Список почтовых шаблонов кандидату |
| `candidateMailTemplateEdit` | GET | `/api/settings/candidate-mail-templates/{candidate-mail-template}/edit` | `settings.json` | Редактирование шаблона кандидату |
| `candidateMailTemplatesUpdate` | PUT | `/api/settings/candidate-mail-templates/{candidate-mail-template}` | `settings.json` | Обновление существующего шаблона кандидату |
| `candidateMailTemplatesDestroy` | DELETE | `/api/settings/candidate-mail-templates/{candidate-mail-template}` | `settings.json` | Удаление существующего шаблона кандидату |
| `messengersMailTemplatesList` | GET | `/api/settings/messengers-mail-templates` | `settings.json` | Список шаблонов писем в мессенджере |
| `messengersMailTemplateStore` | POST | `/api/settings/messengers-mail-templates` | `settings.json` | Сохранение нового шаблона писем в мессенджере |
| `messengersMailTemplateCreate` | GET | `/api/settings/messengers-mail-templates/create` | `settings.json` | Новый шаблон писем в мессенджере |
| `messengersMailTemplateShow` | GET | `/api/settings/messengers-mail-templates/{messengers-mail-template}` | `settings.json` | Существующий шаблон писем в мессенджере |
| `messengersMailTemplateUpdate` | PUT | `/api/settings/messengers-mail-templates/{messengers-mail-template}` | `settings.json` | Обновление существующей шаблон писем в мессенджере |
| `messengersMailTemplateDestroy` | DELETE | `/api/settings/messengers-mail-templates/{messengers-mail-template}` | `settings.json` | Удаление существующего шаблона писем в мессенджере |
| `messengersMailTemplateEdit` | GET | `/api/settings/messengers-mail-templates/{messengers-mail-template}/edit` | `settings.json` | Существующий шаблон писем в мессенджере |
| `messengersMailTemplateListTemplates` | GET | `/api/settings/messengers-mail-templates/list-templates` | `settings.json` | Получение всех шаблонов писем в мессенджере |
| `getSettingsNewsCategory` | GET | `/api/settings/news-categories` | `settings.json` | Список категорий |
| `settingsNewsCategoryStore` | POST | `/api/settings/news-categories` | `settings.json` | Сохранение новой категории |
| `settingsNewsCategoryCreate` | GET | `/api/settings/news-categories/create` | `settings.json` | Новая категория |
| `settingsNewsCategoryQuickStore` | POST | `/api/settings/news-categories/quick` | `settings.json` | Сохранение новой категории |
| `settingsNewsCategoryEdit` | GET | `/api/settings/news-categories/{news_category}/edit` | `settings.json` | Редактирование существующей категории |
| `settingsNewsCategoryUpdate` | PUT | `/api/settings/news-categories/{news_category}` | `settings.json` | Обновление данных категории |
| `settingsNewsCategoryDestroy` | DELETE | `/api/settings/news-categories/{news_category}` | `settings.json` | Удаление существующей категории |
| `getSettingsNewsTag` | GET | `/api/settings/news-tags` | `settings.json` | Список тегов |
| `settingsNewsTagStore` | POST | `/api/settings/news-tags` | `settings.json` | Сохранение нового тега |
| `settingsNewsTagUpdate` | PUT | `/api/settings/news-tags` | `settings.json` | Обновление данных тега |
| `settingsNewsTagCreate` | GET | `/api/settings/news-tags/create` | `settings.json` | Новый тег |
| `settingsNewsTagQuickStore` | POST | `/api/settings/news-tags/quick` | `settings.json` | Сохранение нового тега |
| `settingsNewsTagEdit` | GET | `/api/settings/news-tags/{news_tag}/edit` | `settings.json` | Редактирование существующего тега |
| `settingsNewsTagDestroy_api_settings_news_tags_news_tag` | DELETE | `/api/settings/news-tags/{news_tag}` | `settings.json` | Удаление существующего тега |
| `getSettingsNotifications` | GET | `/api/settings/notifications` | `settings.json` | Список настроек |
| `settingsNotificationsUpdate` | POST | `/api/settings/notifications` | `settings.json` | Обновление настроек уведомлений |
| `settingsOfferApprovalSettingsCreate` | GET | `/api/settings/offer-approval` | `settings.json` | Настройки для формы запроса |
| `settingsOfferApprovalSettingsStore` | PUT | `/api/settings/offer-approval` | `settings.json` | Сохранение настроек для формы утверждения оффера |
| `offerTemplatesList` | GET | `/api/settings/offer-templates` | `settings.json` | Список шаблонов предложений |
| `offerTemplateStore` | POST | `/api/settings/offer-templates` | `settings.json` | Сохранение нового шаблона предложения |
| `offerTemplateCreate` | GET | `/api/settings/offer-templates/create` | `settings.json` | Новый шаблон предложения |
| `offerTemplateEdit` | GET | `/api/settings/offer-templates/{offer-template}/edit` | `settings.json` | Существующая шаблон предложения |
| `offerTemplateUpdate` | PUT | `/api/settings/offer-templates/{offer-template}` | `settings.json` | Обновление существующей шаблона предложения |
| `offerTemplateDestroy` | DELETE | `/api/settings/offer-templates/{offer-template}` | `settings.json` | Удаление существующей шаблона предложения |
| `getSettingsOneOnOneTypeList` | GET | `/api/settings/one-on-one-types` | `settings.json` | Список типов 1-on-1 |
| `settingsOneOnOneTypeStore` | POST | `/api/settings/one-on-one-types` | `settings.json` | Сохранение нового типа 1-on-1 |
| `settingsOneOnOneTypeCreate` | GET | `/api/settings/one-on-one-types/create` | `settings.json` | Новый тип 1-on-1 |
| `settingsOneOnOneTypeEdit` | GET | `/api/settings/one-on-one-types/{one-on-one-type}/edit` | `settings.json` | Существующий тип 1-on-1 |
| `settingsOneOnOneTypeUpdate` | PUT | `/api/settings/one-on-one-types/{one-on-one-type}` | `settings.json` | Обновление существующего типа 1-on-1 |
| `settingsOneOnOneTypeDestroy` | DELETE | `/api/settings/one-on-one-types/{one-on-one-type}` | `settings.json` | Удаление существующего типа 1-on-1 |
| `settingsOutlookIndex` | GET | `/api/settings/outlook_settings` | `settings.json` | Настройки Outlook |
| `settingsOutlookUpdate` | POST | `/api/settings/outlook_settings` | `settings.json` | Сохранить настройки Outlook |
| `settingsOutlookDestroy` | DELETE | `/api/settings/outlook_settings` | `settings.json` | Удалить настройки Outlook |
| `settingsOutlookUpdatePassword` | PATCH | `/api/settings/outlook_settings/password` | `settings.json` | Обновить пароль Outlook |
| `settingsOutlookLogs` | GET | `/api/settings/outlook_settings/logs` | `settings.json` | Логи Outlook |
| `settingsOutlookLogDownload` | GET | `/api/settings/outlook_settings/logs/download` | `settings.json` | Скачать лог Outlook |
| `getSettingsPayScheduleList` | GET | `/api/settings/pay-schedules` | `settings.json` | Список графиков оплаты |
| `settingsPayScheduleStore` | POST | `/api/settings/pay-schedules` | `settings.json` | Сохранение нового графика оплаты |
| `settingsPayScheduleCreate` | GET | `/api/settings/pay-schedules/create` | `settings.json` | Новый график оплаты |
| `settingsPayScheduleEdit` | GET | `/api/settings/pay-schedules/{pay-schedule}/edit` | `settings.json` | Существующий график оплаты |
| `settingsPayScheduleUpdate` | PUT | `/api/settings/pay-schedules/{pay-schedule}` | `settings.json` | Обновление существующего графика оплаты |
| `settingsPayScheduleDestroy` | DELETE | `/api/settings/pay-schedules/{pay-schedule}` | `settings.json` | Удаление существующего графика оплаты |
| `PersonalDataRequestTemplateList` | GET | `/api/settings/personal-data-request-templates` | `settings.json` | Список запроса персональных данных |
| `PersonalDataRequestTemplatetore` | POST | `/api/settings/personal-data-request-templates` | `settings.json` | Сохранение нового шаблона запроса персональных данных |
| `PersonalDataRequestTemplateCreate` | GET | `/api/settings/personal-data-request-templates/create` | `settings.json` | Новый шаблон запроса персональных данных |
| `PersonalDataRequestTemplateShow` | GET | `/api/settings/personal-data-request-templates/{personal-data-request-template}` | `settings.json` | Детальная шаблона запроса персональных данных |
| `PersonalDataRequestTemplateUpdate` | PUT | `/api/settings/personal-data-request-templates/{personal-data-request-template}` | `settings.json` | Обновление существующего шаблона запроса персональных данных |
| `PersonalDataRequestTemplateDestroy` | DELETE | `/api/settings/personal-data-request-templates/{personal-data-request-template}` | `settings.json` | Удаление существующего шаблона запрос персональных данных |
| `PersonalDataRequestTemplateEdit` | GET | `/api/settings/personal-data-request-templates/{personal-data-request-template}/edit` | `settings.json` | Форма для редактирования шаблона запроса персональных данных |
| `getPositionCompetencies` | GET | `/api/settings/positions/{position}/competencies` | `settings.json` | Список сопоставления должности и компетенций |
| `updatePositionCompetencies` | PUT | `/api/settings/positions/{position}/competencies` | `settings.json` | Обновление списка сопоставления должности и компетенций |
| `editPositionCompetencies` | GET | `/api/settings/positions/{position}/competencies/edit` | `settings.json` | Обновление списка сопоставления должности и компетенций |
| `getSettingsPositionList` | GET | `/api/settings/positions` | `settings.json` | Список должностей |
| `getSettingsPositionStore` | POST | `/api/settings/positions` | `settings.json` | Сохранение новой должности |
| `getSettingsPositionCreate` | GET | `/api/settings/positions/create` | `settings.json` | Новая должность |
| `getSettingsPositionEdit` | GET | `/api/settings/positions/{position}/edit` | `settings.json` | Существующая должность |
| `getSettingsPositionUpdate` | PUT | `/api/settings/positions/{position}` | `settings.json` | Обновление существующей должности |
| `getSettingsPositionDestroy` | DELETE | `/api/settings/positions/{position}` | `settings.json` | Удаление существующей должности |
| `getSettingsPositionCopy` | POST | `/api/settings/positions/{position}/copy` | `settings.json` | Копирование существующей должности |
| `getSettingsRankTemplateList` | GET | `/api/settings/rank-templates-list` | `settings.json` | Получение шаблонов разрядов |
| `getSettingsPositionReasonsList` | GET | `/api/settings/position-reasons` | `settings.json` | Список причин изменения должности |
| `settingsPositionReasonsStore` | POST | `/api/settings/position-reasons` | `settings.json` | Сохранение новой причины изменения должности |
| `settingsPositionReasonsCreate` | GET | `/api/settings/position-reasons/create` | `settings.json` | Новая причина изменения должности |
| `settingsPositionReasonsEdit` | GET | `/api/settings/position-reasons/{salary-reason}/edit` | `settings.json` | Существующая причина изменения должности |
| `settingsPositionReasonsUpdate` | PUT | `/api/settings/position-reasons/{salary-reason}` | `settings.json` | Обновление существующей причины изменения должности |
| `settingsPositionReasonsDestroy` | DELETE | `/api/settings/position-reasons/{salary-reason}` | `settings.json` | Удаление существующей причины изменения должности |
| `getSettingsPreboardingStepList` | GET | `/api/settings/preboarding/{boarding}/step` | `settings.json` | Список этапов пребординга |
| `settingsPreboardingStepStore` | POST | `/api/settings/preboarding/{boarding}/step` | `settings.json` | Сохранение нового этапа |
| `settingsPreboardingStepCreate` | GET | `/api/settings/preboarding/{boarding}/step/type/{type}/create` | `settings.json` | Форма для добавления этапа |
| `settingsPreboardingStepCopy` | POST | `/api/settings/preboarding/{boarding}/step/{step}/copy` | `settings.json` | Сохранение нового этапа |
| `settingsPreboardingStepEdit` | GET | `/api/settings/preboarding/step/{step}/edit` | `settings.json` | Форма для изменения этапа |
| `settingsPreboardingStepUpdate` | PUT | `api/settings/preboarding/step/{step}` | `settings.json` | Обновление этапа |
| `settingsPreboardingStepSort` | PUT | `/api/settings/settings/preboarding/{boarding}/steps-sort` | `settings.json` | Сортировка этапов |
| `settingsPreboardingStepDestroy` | DELETE | `/api/settings/preboarding/step/{step}` | `settings.json` | Удаление этапа |
| `getSettingsProbationPoliciesList` | GET | `/api/settings/probation-policies` | `settings.json` | Список политик испытательного срока |
| `settingsProbationPolicyStore` | POST | `/api/settings/probation-policies` | `settings.json` | Сохранение новой политики |
| `settingsProbationPolicyCreate` | GET | `/api/settings/probation-policies/create` | `settings.json` | Новая политика |
| `settingsProbationPolicyEdit` | GET | `/api/settings/probation-policies/{probation-policy}/edit` | `settings.json` | Существующая политика |
| `settingsProbationPolicyUpdate` | PUT | `/api/settings/probation-policies/{probation-policy}` | `settings.json` | Обновление существующей политики |
| `settingsProbationPolicyDestroy` | DELETE | `/api/settings/probation-policies/{probation-policy}` | `settings.json` | Удаление существующей политики |
| `processList` | GET | `/api/settings/process` | `settings.json` | Список процессов по группам |
| `processStore` | POST | `/api/settings/process` | `settings.json` | Сохранение процесса |
| `processCreate` | GET | `/api/settings/process/create` | `settings.json` | Форма для создания нового процесса |
| `processTemplateStore` | POST | `/api/settings/process/template` | `settings.json` | Сохранение черновика процесса |
| `processEdit` | GET | `/api/settings/process/{process}/edit` | `settings.json` | Поля для формы редактирования процесса |
| `processUpdate` | PUT | `/api/settings/process/{process}` | `settings.json` | Обновление процесса |
| `processDestroy` | DELETE | `/api/settings/process/{process}` | `settings.json` | Удаление процесса |
| `processTemplateUpdate` | PUT | `/api/settings/process/template/{process}` | `settings.json` | Обновление черновика процесса |
| `processChangeActive` | GET | `/api/settings/process/{process}/change-active` | `settings.json` | Изменение активации процесса |
| `processGroupList` | GET | `/api/settings/process/groups` | `settings.json` | Список групп процессов |
| `processGroupStore` | POST | `/api/settings/process/groups` | `settings.json` | Сохранение группы процесса |
| `processGroupCreate` | GET | `/api/settings/process/groups/create` | `settings.json` | Поля для создания группы |
| `processGroupEdit` | GET | `/api/settings/process/groups/{group}/edit` | `settings.json` | Поля для редактирования группы процесса |
| `processGroupUpdate` | PUT | `/api/settings/process/groups/{group}` | `settings.json` | Обновление группы процесса |
| `processGroupDestroy` | DELETE | `/api/settings/process/groups/{group}` | `settings.json` | Удаление группы процесса |
| `processGroupSort` | PUT | `/api/settings/process/groups-sort` | `settings.json` | Сортировка групп процессов |
| `getSettingsQuestionnaireList` | GET | `/api/settings/questionnaire` | `settings.json` | Список Анкет |
| `settingsQuestionnaireCreate` | GET | `/api/settings/questionnaire/create` | `settings.json` | Форма для добавления Анкеты |
| `settingsQuestionnaireStore` | POST | `/api/settings/questionnaire/` | `settings.json` | Сохранение новой Анкеты |
| `settingsQuestionnaireEdit` | GET | `/api/settings/questionnaire/{questionnaire}/edit` | `settings.json` | Форма для изменения анкеты |
| `settingsQuestionnaireUpdate` | PUT | `/api/settings/questionnaire/{questionnaire}` | `settings.json` | Обновление анкеты |
| `settingsQuestionnaireDestroy` | DELETE | `/api/settings/questionnaire/{questionnaire}` | `settings.json` | Удаление существующей анкеты |
| `settingsQuestionnairePreview` | GET | `/api/settings/questionnaire/{questionnaire}/preview` | `settings.json` | Предпросмотр анкеты |
| `questionnaireCopy` | POST | `/api/settings/questionnaire/{questionnaire}/copy` | `settings.json` | Копирование анкеты |
| `questionnaireQuestionCreate` | GET | `/api/settings/questionnaire/{questionnaire}/question-type/{type}/create` | `settings.json` | Поля для создания вопроса |
| `questionnaireQuestionStore` | POST | `/api/settings/questionnaire/{questionnaire}/question-type/{type}/questions` | `settings.json` | Сохранение вопроса |
| `questionnaireQuestionEdit` | GET | `/api/settings/questionnaire/questions/{question}/edit` | `settings.json` | Поля для редактирования вопроса |
| `questionnaireQuestionUpdate` | PUT | `/api/settings/questionnaire/questions/{question}` | `settings.json` | Обновление вопроса |
| `questionnaireQuestionDestroy` | DELETE | `/api/settings/questionnaire/questions/{question}` | `settings.json` | Удаление вопроса |
| `questionnaireQuestionSort` | PUT | `/api/settings/questionnaire/{questionnaire}/questions-sort` | `settings.json` | Сортировка вопросов |
| `getSettingsRanksList` | GET | `/api/settings/ranks` | `settings.json` | Список шаблонов разрядов |
| `storetSettingsRankTemplate` | POST | `/api/settings/ranks` | `settings.json` | Создание шаблона разрядов |
| `createtSettingsRankTemplate` | GET | `/api/settings/ranks/create` | `settings.json` | Форма для создания шаблона разрядов. |
| `editSettingsRankTemplate` | GET | `/api/settings/ranks/{rank}/edit` | `settings.json` | Форма для редактирования шаблона разрядов |
| `updateSettingsRankTemplate` | PUT | `/api/settings/ranks/{rank}` | `settings.json` | Обновление шаблона разрядов |
| `deleteSettingsRankTemplate` | DELETE | `/api/settings/ranks/{rank}` | `settings.json` | Удаление шаблона разрядов |
| `settingsRecruitmentIntegrationList` | GET | `/api/settings/recruitment/integration` | `settings.json` | Список профилей интеграции |
| `settingsRecruitmentIntegrationCreate` | GET | `/api/settings/recruitment/integration/create` | `settings.json` | Добавление профиля интеграции |
| `settingsRecruitmentIntegrationEdit` | GET | `/api/settings/recruitment/integration/{integration}/edit` | `settings.json` | Редактирование профиля интеграции |
| `settingsRecruitmentIntegrationDestroy` | DELETE | `/api/settings/recruitment/integration/{integration}` | `settings.json` | Удаление существующего профиля |
| `settingsRecruitmentIntegrationDestroyAll` | DELETE | `/api/settings/recruitment/integration/destroy` | `settings.json` | Удаление всех профилей |
| `settingsRecruitmentIntegrationSwitchOff` | DELETE | `/api/settings/recruitment/integration/switch-off` | `settings.json` | Отключение профилей существующей интеграции |
| `addUpdateToken` | POST | `/api/settings/recruitment/integration/token` | `settings.json` | Создание или обновление токена интеграции |
| `installWazzup` | POST | `/api/settings/recruitment/integration/wazzup` | `settings.json` | Установка интеграции wazzup |
| `getSettingsRecruitmentSource` | GET | `/api/settings/sources` | `settings.json` | Список источников |
| `settingsRecruitmentSourceStore` | POST | `/api/settings/sources` | `settings.json` | Сохранение нового источника |
| `settingsRecruitmentSourceCreate` | GET | `/api/settings/sources/create` | `settings.json` | Новый источник |
| `settingsRecruitmentSourceEdit` | GET | `/api/settings/sources/{source}/edit` | `settings.json` | Редактирование существующего источника |
| `settingsRecruitmentSourceUpdate` | PUT | `/api/settings/sources/{source}` | `settings.json` | Обновление данных источника |
| `settingsRecruitmentSourceDestroy` | DELETE | `/api/settings/sources/{source}` | `settings.json` | Удаление существующего источника |
| `getSettingsRolesList` | GET | `/api/settings/roles` | `settings.json` | Список ролей пользователей |
| `getSettingsRoleUsersList` | GET | `/api/settings/permissions` | `settings.json` | Список пользователей по ролям |
| `getSettingsRoleCreate` | GET | `/api/settings/permissions/create` | `settings.json` | Форма для добавления роли |
| `getSettingsRolesStore` | POST | `/api/settings/permissions/` | `settings.json` | Сохранение новой роли |
| `getSettingsPermissionEdit` | GET | `/api/settings/permissions/{role}/edit` | `settings.json` | Форма для изменения роли |
| `getSettingsPermissionUpdate` | PUT | `/api/settings/permissions/{role}` | `settings.json` | Обновление роли |
| `settingsRoleDestroy` | DELETE | `/api/settings/permissions/{role}` | `settings.json` | Удаление существующей роли |
| `getSettingsPermissionCopy` | POST | `/api/settings/permissions/{role}/copy` | `settings.json` | Копирование роли |
| `getSettingsPermissionUserEdit` | GET | `/api/settings/permissions/user/{user}` | `settings.json` | Форма для изменения роли пользователя |
| `getSettingsPermissionUserUpdate` | PUT | `/api/settings/permissions/user/{user}` | `settings.json` | Обновление роли пользователя |
| `rollbackToDefault` | POST | `/api/settings/permissions/{role}/rollback-to-default` | `settings.json` | Откат параметров роли до значений по умолчанию |
| `getSettingsSalaryReasonsList` | GET | `/api/settings/salary-reasons` | `settings.json` | Список причин изменения зарплаты |
| `settingsSalaryReasonsStore` | POST | `/api/settings/salary-reasons` | `settings.json` | Сохранение новой причины изменения зарплаты |
| `settingsSalaryReasonsCreate` | GET | `/api/settings/salary-reasons/create` | `settings.json` | Новая причина изменения зарплаты |
| `settingsSalaryReasonsEdit` | GET | `/api/settings/salary-reasons/{salary-reason}/edit` | `settings.json` | Существующая причина изменения зарплаты |
| `settingsSalaryReasonsUpdate` | PUT | `/api/settings/salary-reasons/{salary-reason}` | `settings.json` | Обновление существующей причины изменения зарплаты |
| `settingsSalaryReasonsDestroy` | DELETE | `/api/settings/salary-reasons/{salary-reason}` | `settings.json` | Удаление существующей причины изменения зарплаты |
| `getSettingsScalesList` | GET | `/api/settings/scales` | `settings.json` | Список рейтинговых шкал |
| `scaleStore` | POST | `/api/settings/scales` | `settings.json` | Сохранение нового рейтинговой шкалы |
| `scaleCreate` | GET | `/api/settings/scales/create` | `settings.json` | Форма для добавления рейтинговой шкалы |
| `scaleEdit` | GET | `/api/settings/scales/{scale}/edit` | `settings.json` | Форма для изменения рейтинговой шкалы |
| `scaleUpdate` | PUT | `/api/settings/scales/{scale}` | `settings.json` | Обновление рейтинговой шкалы |
| `scaleDestroy` | DELETE | `/api/settings/scales/{scale}` | `settings.json` | Удаление существующего рейтинговой шкалы |
| `getSettingsScheduleList` | GET | `/api/settings/working-patterns` | `settings.json` | Список графиков работ |
| `getSettingsScheduleStore` | POST | `/api/settings/working-patterns` | `settings.json` | Сохранение нового графика работы |
| `getSettingsScheduleCreate` | GET | `/api/settings/working-patterns/create` | `settings.json` | Форма для добавления графика работы |
| `getSettingsScheduleEdit` | GET | `/api/settings/working-patterns/{working-pattern}/edit` | `settings.json` | Форма для изменения графика работы |
| `getSettingsScheduleUpdate` | PUT | `/api/settings/working-patterns/{working-pattern}` | `settings.json` | Обновление графика работы |
| `getSettingsScheduleDestroy` | DELETE | `/api/settings/working-patterns/{working-pattern}` | `settings.json` | Удаление существующего графика работы |
| `getSettingsSegmentsList` | GET | `/api/settings/segments` | `settings.json` | Список сегментов |
| `segmentStore` | POST | `/api/settings/segments` | `settings.json` | Сохранение нового сегмента |
| `segmentCreate` | GET | `/api/settings/segments/create` | `settings.json` | Форма для добавления сегмента |
| `segmentEdit` | GET | `/api/settings/segments/{segment}/edit` | `settings.json` | Форма для изменения сегмента |
| `segmentUpdate` | PUT | `/api/settings/segments/{segment}` | `settings.json` | Обновление сегмента |
| `segmentDestroy` | DELETE | `/api/settings/segments/{segment}` | `settings.json` | Удаление существующего сегмента |
| `getSettingsSkillList` | GET | `/api/settings/skills` | `settings.json` | Список навыков |
| `getSettingsSkillStore` | POST | `/api/settings/skills` | `settings.json` | Сохранение нового навыка |
| `getSettingsSkillCreate` | GET | `/api/settings/skills/create` | `settings.json` | Форма для добавления навыка |
| `getSettingsSkillEdit` | GET | `/api/settings/skills/{skill}/edit` | `settings.json` | Форма для изменения навыка |
| `getSettingsSkillUpdate` | PUT | `/api/settings/skills/{skill}` | `settings.json` | Обновление навыка |
| `getSettingsSkillDestroy` | DELETE | `/api/settings/skills/{skill}` | `settings.json` | Удаление существующего навыка |
| `getSettingsTemplateLetter` | GET | `/api/settings/template-letter` | `settings.json` | Шаблон писем |
| `template-letter` | POST | `/api/settings/template-letter` | `settings.json` | Сохранение нового шаблона |
| `template-letter-text-to-default` | POST | `/api/settings/template-letter/text-to-default` | `settings.json` | Сохраняет текст шаблона на дефолт |
| `getExampleLetter` | POST | `/api/settings/template-letter/get-example-letter` | `settings.json` | Получение примера письма |
| `dashboardTemplateCreate` | GET | `/api/settings/dashboard/create` | `settings.json` | Форма создания шаблона дашборда |
| `dashboardTemplateEdit` | GET | `/api/settings/dashboard/{dashboard}/edit` | `settings.json` | Форма редактирования информации о шаблоне дашборда |
| `dashboardTemplateUpdate` | PUT | `/api/settings/dashboard/{dashboard}` | `settings.json` | Обновление шаблона дашборда |
| `dashboardTemplateDestroy` | DELETE | `/api/settings/dashboard/{dashboard}` | `settings.json` | Удаление шаблона |
| `dashboardTemplateSettingsUpdate` | PUT | `/api/settings/dashboard-settings/{dashboard}` | `settings.json` | Обновление настроек шаблона дашборда |
| `dashboardTemplateStore` | POST | `/api/settings/dashboard` | `settings.json` | Сохранение нового шаблона дашборда |
| `getSettingsCandidateFieldsList` | GET | `/api/settings/candidate-fields` | `settings.json` | Список полей кандидата |
| `settingsCandidateFieldsStore` | POST | `/api/settings/candidate-fields` | `settings.json` | Сохранение нового поля |
| `settingsCandidateFieldsCreate` | GET | `/api/settings/candidate-fields/create` | `settings.json` | Новое поле |
| `settingsCandidateFieldsEdit` | GET | `/api/settings/candidate-fields/{candidate_field}/edit` | `settings.json` | Существующее поле |
| `settingsCandidateFieldsUpdate` | PUT | `/api/settings/candidate-fields/{candidate_field}` | `settings.json` | Обновление существующего поля |
| `settingsCandidateFieldsDestroy` | DELETE | `/api/settings/candidate-fields/{candidate_field}` | `settings.json` | Удаление существующего поля |
| `settingsCandidateFieldsActivate` | POST | `/api/settings/candidate-fields/activate/{candidate_field}` | `settings.json` | Включение/выключение активности поля |
| `settingsCandidateFieldsUpdateSort` | POST | `/api/settings/candidate-fields/update-sort` | `settings.json` | Изменение порядка вывода полей |
| `getSettingsEmployeeFieldsList` | GET | `/api/settings/employee-fields` | `settings.json` | Список полей пользователей |
| `settingsEmployeeFieldsStore` | POST | `/api/settings/employee-fields` | `settings.json` | Сохранение нового поля |
| `settingsEmployeeFieldsCreate` | GET | `/api/settings/employee-fields/create` | `settings.json` | Новое поле |
| `settingsEmployeeFieldsEdit` | GET | `/api/settings/employee-fields/{employee-field}/edit` | `settings.json` | Существующее поле |
| `settingsEmployeeFieldsUpdate` | PUT | `/api/settings/employee-fields/{employee-field}` | `settings.json` | Обновление существующего поля |
| `settingsEmployeeFieldsDestroy` | DELETE | `/api/settings/employee-fields/{employee-field}` | `settings.json` | Удаление существующего поля |
| `settingsEmployeeFieldsActivate` | POST | `/api/settings/employee-fields/activate/{employee-field}` | `settings.json` | Включение/выключение активности поля |
| `settingsEmployeeFieldsUpdateSort` | POST | `/api/settings/employee-fields/update-sort` | `settings.json` | Изменение порядка вывода полей |
| `settingsCandidateFieldsGroupCreate` | GET | `/api/settings/candidate-fields-group/create` | `settings.json` | Новая группа |
| `settingsCandidateFieldsGroupStore` | POST | `/api/settings/candidate-fields-group` | `settings.json` | Сохранение новой группы |
| `settingsCandidateFieldsGroupEdit` | GET | `/api/settings/candidate-fields-group/{candidate_fields_group}/edit` | `settings.json` | Существующая группа |
| `settingsCandidateFieldsGroupUpdate` | PUT | `/api/settings/candidate-fields-group/{candidate_fields_group}` | `settings.json` | Обновление существующей группы |
| `settingsCandidateFieldsGroupDestroy` | DELETE | `/api/settings/candidate-fields-group/{candidate_fields_group}` | `settings.json` | Удаление существующей группы |
| `settingsCandidateFieldsGroupUpdateSort` | POST | `/api/settings/candidate-fields-group/update-sort` | `settings.json` | Изменение порядка вывода групп |
| `settingsEmployeeFieldsGroupCreate` | GET | `/api/settings/employee-fields-group/create` | `settings.json` | Новая группа |
| `settingsEmployeeFieldsGroupStore` | POST | `/api/settings/employee-fields-group` | `settings.json` | Сохранение новой группы |
| `settingsEmployeeFieldsGroupEdit` | GET | `/api/settings/employee-fields-group/{employee-field-group}/edit` | `settings.json` | Существующая группа |
| `settingsEmployeeFieldsGroupUpdate` | PUT | `/api/settings/employee-fields-group/{employee-field-group}` | `settings.json` | Обновление существующей группы |
| `settingsEmployeeFieldsGroupDestroy` | DELETE | `/api/settings/employee-fields-group/{employee-field-group}` | `settings.json` | Удаление существующей группы |
| `settingsEmployeeFieldsGroupUpdateSort` | POST | `/api/settings/employee-fields-group/update-sort` | `settings.json` | Изменение порядка вывода групп |
| `settingsVacancyFieldsGroupCreate` | GET | `/api/settings/vacancy-fields-group/create` | `settings.json` | Новая группа |
| `settingsVacancyFieldsGroupStore` | POST | `/api/settings/vacancy-fields-group` | `settings.json` | Сохранение новой группы |
| `settingsVacancyFieldsGroupEdit` | GET | `/api/settings/vacancy-fields-group/{vacancy_fields_group}/edit` | `settings.json` | Существующая группа |
| `settingsVacancyFieldsGroupUpdate` | PUT | `/api/settings/vacancy-fields-group/{vacancy_fields_group}` | `settings.json` | Обновление существующей группы |
| `settingsVacancyFieldsGroupDestroy` | DELETE | `/api/settings/vacancy-fields-group/{vacancy_fields_group}` | `settings.json` | Удаление существующей группы |
| `settingsVacancyFieldsGroupUpdateSort` | POST | `/api/settings/vacancy-fields-group/update-sort` | `settings.json` | Изменение порядка вывода групп |
| `settingsVacancyRequestFieldsGroupCreate` | GET | `/api/settings/vacancy-request-fields-group/create` | `settings.json` | Новая группа |
| `settingsVacancyRequestFieldsGroupStore` | POST | `/api/settings/vacancy-request-fields-group` | `settings.json` | Сохранение новой группы |
| `settingsVacancyRequestFieldsGroupEdit` | GET | `/api/settings/vacancy-request-fields-group/{vacancy_request_fields_group}/edit` | `settings.json` | Существующая группа |
| `settingsVacancyRequestFieldsGroupUpdate` | PUT | `/api/settings/vacancy-request-fields-group/{vacancy_request_fields_group}` | `settings.json` | Обновление существующей группы |
| `settingsVacancyRequestFieldsGroupDestroy` | DELETE | `/api/settings/vacancy-request-fields-group/{vacancy_request_fields_group}` | `settings.json` | Удаление существующей группы |
| `settingsVacancyRequestFieldsGroupUpdateSort` | POST | `/api/settings/vacancy-request-fields-group/update-sort` | `settings.json` | Изменение порядка вывода групп |
| `getSettingsVacancyFieldsList` | GET | `/api/settings/vacancy-fields` | `settings.json` | Список полей вакансии |
| `settingsVacancyFieldsStore` | POST | `/api/settings/vacancy-fields` | `settings.json` | Сохранение нового поля |
| `settingsVacancyFieldsCreate` | GET | `/api/settings/vacancy-fields/create` | `settings.json` | Новое поле |
| `settingsVacancyFieldsEdit` | GET | `/api/settings/vacancy-fields/{vacancy_field}/edit` | `settings.json` | Существующее поле |
| `settingsVacancyFieldsUpdate` | PUT | `/api/settings/vacancy-fields/{vacancy_field}` | `settings.json` | Обновление существующего поля |
| `settingsVacancyFieldsDestroy` | DELETE | `/api/settings/vacancy-fields/{vacancy_field}` | `settings.json` | Удаление существующего поля |
| `settingsVacancyFieldsActivate` | POST | `/api/settings/vacancy-fields/activate/{vacancy_field}` | `settings.json` | Включение/выключение активности поля |
| `settingsVacancyFieldsUpdateSort` | POST | `/api/settings/vacancy-fields/update-sort` | `settings.json` | Изменение порядка вывода полей |
| `getSettingsVacancyRequestFieldsList` | GET | `/api/settings/vacancy-request-fields` | `settings.json` | Список полей заявки на подбор |
| `settingsVacancyRequestFieldsStore` | POST | `/api/settings/vacancy-request-fields` | `settings.json` | Сохранение нового поля |
| `settingsVacancyRequestFieldsCreate` | GET | `/api/settings/vacancy-request-fields/create` | `settings.json` | Новое поле |
| `settingsVacancyRequestFieldsEdit` | GET | `/api/settings/vacancy-request-fields/{vacancy_request_field}/edit` | `settings.json` | Существующее поле |
| `settingsVacancyReqeustFieldsUpdate` | PUT | `/api/settings/vacancy-request-fields/{vacancy_request_field}` | `settings.json` | Обновление существующего поля |
| `settingsVacancyRequestFieldsDestroy` | DELETE | `/api/settings/vacancy-request-fields/{vacancy_request_field}` | `settings.json` | Удаление существующего поля |
| `settingsVacancyRequestFieldsActivate` | POST | `/api/settings/vacancy-request-fields/activate/{vacancy_request_field}` | `settings.json` | Включение/выключение активности поля |
| `settingsVacancyRequestFieldsUpdateSort` | POST | `/api/settings/vacancy-request-fields/update-sort` | `settings.json` | Изменение порядка вывода полей |
| `piplineData` | GET | `/api/settings/pipelines` | `settings.json` | Этапы цикла по найму |
| `pipelineStore` | POST | `/api/settings/pipelines` | `settings.json` | Создание цикла по найму |
| `piplineCreate` | GET | `/api/settings/pipelines/create` | `settings.json` | Поля формы создания цикла по найму |
| `pipelineEdit` | GET | `/api/settings/pipelines/{pipeline}/edit` | `settings.json` | Поля формы редактирования цикла по найму |
| `pipelineUpdate` | PUT | `/api/settings/pipelines/{pipeline}` | `settings.json` | Обновление цикла по найму |
| `pipelineDestroy` | DELETE | `/api/settings/pipelines/{pipeline}` | `settings.json` | Удаление существующего цикла |
| `pipelineSetDefault` | GET | `/api/settings/pipelines/{pipeline}/set-default` | `settings.json` | Сделать цикл по найму по умолчанию |
| `pipelineCopy` | GET | `/api/settings/pipelines/{pipeline}/copy` | `settings.json` | Копирование цикла по найму |
| `piplineStageCreate` | GET | `/api/settings/pipelines/{pipeline}/stages/create` | `settings.json` | Поля формы создания этапа цикла по найму |
| `pipelineStageStore` | POST | `/api/settings/pipelines/{pipeline}/stages` | `settings.json` | Создание этапа цикла по найму |
| `piplineStageEdit` | GET | `/api/settings/stages/{stage}/edit` | `settings.json` | Поля формы для редактирования этапа цикла по найму |
| `pipelineStageUpdate` | PUT | `/api/settings/stages/{stage}` | `settings.json` | Обновление этапа цикла по найму |
| `pipelineStageDestroy` | DELETE | `/api/settings/stages/{stage}` | `settings.json` | Удаление существующего этапа цикла |
| `piplineStageSort` | POST | `/api/settings/pipelines/{pipeline}/stages/sort` | `settings.json` | Сортировка этапов цикла по найму |
| `pipelineStageRobotKanban` | GET | `/api/settings/pipelines/{pipeline}/robots` | `settings.json` | Канбан автоматических действий pipeline |
| `pipelineStageRobotStagePage` | GET | `/api/settings/stages/{stage}/robots/page` | `settings.json` | Пагинация роботов этапа pipeline |
| `pipelineStageRobotCreate` | GET | `/api/settings/stages/{stage}/robots/create` | `settings.json` | Поля формы создания автоматического действия этапа |
| `pipelineStageRobotStore` | POST | `/api/settings/stages/{stage}/robots` | `settings.json` | Создание автоматического действия этапа |
| `pipelineStageRobotEdit` | GET | `/api/settings/robots/{robot}/edit` | `settings.json` | Поля формы редактирования автоматического действия этапа |
| `pipelineStageRobotUpdate` | PUT | `/api/settings/robots/{robot}` | `settings.json` | Обновление автоматического действия этапа |
| `pipelineStageRobotDestroy` | DELETE | `/api/settings/robots/{robot}` | `settings.json` | Удаление автоматического действия этапа |
| `settingsVacancyRequestCreate` | GET | `/api/settings/vacancy-request/create` | `settings.json` | Настройки для формы запроса |
| `settingsVacancyRequestStore` | POST | `/api/settings/vacancy-request` | `settings.json` | Сохранение настроек для формы запроса |
| `getSettingsVacancyTag` | GET | `/api/settings/vacancy-tags` | `settings.json` | Список тегов |
| `settingsVacancyTagStore` | POST | `/api/settings/vacancy-tags` | `settings.json` | Сохранение нового тега |
| `settingsVacancyTagUpdate` | PUT | `/api/settings/vacancy-tags` | `settings.json` | Обновление данных тега |
| `settingsVacancyTagCreate` | GET | `/api/settings/vacancy-tags/create` | `settings.json` | Новый тег |
| `settingsVacancyTagEdit` | GET | `/api/settings/vacancy-tags/{vacancy_tag}/edit` | `settings.json` | Редактирование существующего тега |
| `settingsVacancyTagDestroy` | DELETE | `/api/settings/vacancy-tags/{vacancy_tag}` | `settings.json` | Удаление существующего тега |
| `getSettingsWebhookList` | GET | `/api/settings/webhook` | `settings.json` | Список webhook |
| `settingsWebhookStore` | POST | `/api/settings/webhook` | `settings.json` | Сохранение нового webhook |
| `settingsWebhookCreate` | GET | `/api/settings/webhook/create` | `settings.json` | Новый webhook |
| `settingsWebhookEdit` | GET | `/api/settings/webhook/{webhook}/edit` | `settings.json` | Существующий webhook |
| `settingsWebhookUpdate` | PUT | `/api/settings/webhook/{webhook}` | `settings.json` | Обновление существующего webhook |
| `settingsWebhookDestroy` | DELETE | `/api/settings/webhook/{webhook}` | `settings.json` | Удаление существующего webhook |
| `getSettingsOnboardingWorkflowList` | GET | `/api/settings/boarding/{boarding}/workflows` | `settings.json` | Список задач |
| `settingsOnboardingWorkflowStore` | POST | `/api/settings/boarding/{boarding}/workflows` | `settings.json` | Сохранение новой задачи |
| `settingsOnboardingWorkwlowCreate` | GET | `/api/settings/boarding/{boarding}/workflows/create` | `settings.json` | Форма для добавления задачи |
| `settingsWorkflowEdit` | GET | `/api/settings/workflows/{workflow}/edit` | `settings.json` | Форма для изменения задачи |
| `settingsOnboardingWorkflowUpdate` | PUT | `/api/settings/workflows/{workflow}` | `settings.json` | Обновление задачи |
| `settingsOnboardingWorkflowDestroy` | DELETE | `/api/settings/workflows/{workflow}` | `settings.json` | Удаление существующей задачи |
| `settingsWorkflowsUpdateSort` | POST | `/api/settings/workflows/update-sort` | `settings.json` | Изменение порядка вывода задач |
| `settingsShallowBoardingLevelEdit` | GET | `/api/settings/level/{level}/edit` | `settings.json` | Форма уровня (shallow route) |
| `settingsShallowBoardingLevelUpdate` | PUT | `/api/settings/level/{level}` | `settings.json` | Обновление уровня (shallow route) |
| `settingsShallowBoardingLevelDestroy` | DELETE | `/api/settings/level/{level}` | `settings.json` | Удаление уровня (shallow route) |
| `settingsBoardingStepIndexNested` | GET | `/api/settings/boarding/{boarding}/level/{level}/step` | `settings.json` | Шаги уровня (nested resource URI) |
| `settingsBoardingStepStoreNested` | POST | `/api/settings/boarding/{boarding}/level/{level}/step` | `settings.json` | Создание шага (nested URI) |
| `settingsBoardingStepCreateNested` | GET | `/api/settings/boarding/{boarding}/level/{level}/step/create` | `settings.json` | Форма шага (nested URI) |
| `settingsShallowBoardingStepEdit` | GET | `/api/settings/step/{step}/edit` | `settings.json` | Форма шага (shallow route) |
| `settingsShallowBoardingStepUpdate` | PUT | `/api/settings/step/{step}` | `settings.json` | Обновление шага (shallow route) |
| `settingsShallowBoardingStepDestroy` | DELETE | `/api/settings/step/{step}` | `settings.json` | Удаление шага (shallow route) |
| `settingsPreboardingStepsSort` | PUT | `/api/settings/preboarding/{boarding}/steps-sort` | `settings.json` | Сортировка шагов пребординга |
| `settingsDepartmentsCreate` | GET | `/api/settings/departments/create` | `settings.json` | Создание подразделения |
| `settingsDepartmentsStore` | POST | `/api/settings/departments` | `settings.json` | Создание подразделения |
| `settingsDepartmentsShow` | GET | `/api/settings/departments/{department}` | `settings.json` | Информация о подразделении |
| `settingsDepartmentsUpdate` | PUT | `/api/settings/departments/{department}` | `settings.json` | Обновление подразделения |
| `settingsDepartmentsDestroy` | DELETE | `/api/settings/departments/{department}` | `settings.json` | Удаление подразделения |
| `settingsDepartmentsEdit` | GET | `/api/settings/departments/{department}/edit` | `settings.json` | Изменение подразделения |
| `settingsDepartmentsStructure` | GET | `/api/settings/departments/structure` | `settings.json` | Организационная структура Компании |
| `settingsDepartmentsStructureSearch` | GET | `/api/settings/departments/structure/search` | `settings.json` | Поиск в представлении Блок-Схема |
| `settingsDepartmentActivate` | POST | `/api/settings/departments/{department}/activate` | `settings.json` | Скрытие\Открытие отдела |
| `settingsDepartmentEmployees` | GET | `/api/settings/departments/{department}/employees` | `settings.json` | Сотрудники подразделения |
| `settingsDepartment_hildEmployees` | GET | `/api/settings/departments/{department}/childEmployees` | `settings.json` | Сотрудники дочерних подразделении |
| `settingsDoodocsShow` | GET | `/api/settings/doodocs` | `settings.json` | Настройки интеграции Doodocs |
| `settingsDoodocsUpdate` | POST | `/api/settings/doodocs` | `settings.json` | Сохранение настроек интеграции Doodocs |
| `settingsDuelQuestionsCreate` | GET | `/api/settings/duel/questions/create` | `settings.json` | Форма создания вопроса (без темы в path) |
| `settingsDuelQuestionsEdit` | GET | `/api/settings/duel/questions/{question}/edit` | `settings.json` | Форма редактирования вопроса |
| `settingsDuelQuestionsUpdate` | PUT | `/api/settings/duel/questions/{question}` | `settings.json` | Обновление вопроса |
| `settingsDuelQuestionsDestroy` | DELETE | `/api/settings/duel/questions/{question}` | `settings.json` | Удаление вопроса |
| `settingsDuelQuestionsCopyForm` | GET | `/api/settings/duel/questions/{question}/copy-form` | `settings.json` | Форма копирования вопроса |
| `settingsDuelQuestionsCopy` | POST | `/api/settings/duel/questions/{question}/copy` | `settings.json` | Создание копии вопроса |
| `settingsDuelQuestionsStatus` | POST | `/api/settings/duel/questions/{question}/update-status` | `settings.json` | Переключение публикации вопроса |
| `settingsDuelEdit` | GET | `/api/settings/duel` | `settings.json` | Настройки игры «Дуэль» |
| `settingsDuelUpdate` | PUT | `/api/settings/duel` | `settings.json` | Сохранение настроек дуэли |
| `settingsMultiActionDuelThemes` | POST | `/api/settings/multi-actions/duel-themes` | `settings.json` | Массовые действия с темами |
| `settingsMultiActionDuelQuestions` | POST | `/api/settings/multi-actions/duel-questions` | `settings.json` | Массовые действия с вопросами темы |
| `settingsDuelThemesIndex` | GET | `/api/settings/duel/themes` | `settings.json` | Список тем дуэли |
| `settingsDuelThemesStore` | POST | `/api/settings/duel/themes` | `settings.json` | Создание темы |
| `settingsDuelThemesCreate` | GET | `/api/settings/duel/themes/create` | `settings.json` | Форма создания темы |
| `settingsDuelThemesEdit` | GET | `/api/settings/duel/themes/{theme}/edit` | `settings.json` | Форма редактирования темы |
| `settingsDuelThemesUpdate` | PUT | `/api/settings/duel/themes/{theme}` | `settings.json` | Обновление темы |
| `settingsDuelThemesDestroy` | DELETE | `/api/settings/duel/themes/{theme}` | `settings.json` | Удаление темы и её вопросов |
| `settingsDuelThemesStatus` | POST | `/api/settings/duel/themes/{theme}/update-status` | `settings.json` | Переключение публикации темы |
| `settingsDuelQuestionsIndex` | GET | `/api/settings/duel/themes/{theme}/questions` | `settings.json` | Список вопросов темы |
| `settingsDuelQuestionsStore` | POST | `/api/settings/duel/themes/{theme}/questions` | `settings.json` | Создание вопроса в теме |
| `settingsDailyQuestionSort` | POST | `/api/settings/daily-question/groups/{group}/questions-sort` | `settings.json` | Сортировка вопросов дня в группе |
| `settingsDailyQuestionCopy` | POST | `/api/settings/daily-question/{question}/copy` | `settings.json` | Копирование вопроса дня |
| `settingsCleverestQuestionSort` | POST | `/api/settings/cleverest/groups/{group}/questions-sort` | `settings.json` | Сортировка вопросов «Самый умный» |
| `settingsCleverestQuestionStatus` | PUT | `/api/settings/cleverest/questions/{question}/update-status` | `settings.json` | Переключение публикации вопроса |
| `settingsPrResultsIndex` | GET | `/api/settings/performance-review-results` | `settings.json` | Список результатов performance review |
| `settingsPrResultsStore` | POST | `/api/settings/performance-review-results` | `settings.json` | Создать результат |
| `settingsPrResultsCreate` | GET | `/api/settings/performance-review-results/create` | `settings.json` | Форма создания результата |
| `settingsPrResultsEdit` | GET | `/api/settings/performance-review-results/{performance_review_result}/edit` | `settings.json` | Форма редактирования результата |
| `settingsPrResultsUpdate` | PUT | `/api/settings/performance-review-results/{performance_review_result}` | `settings.json` | Обновить результат |
| `settingsPrResultsDestroy` | DELETE | `/api/settings/performance-review-results/{performance_review_result}` | `settings.json` | Удалить результат |
| `settingsPrGoalsIndex` | GET | `/api/settings/performance-review-goals` | `settings.json` | Список целей performance review |
| `settingsPrGoalsStore` | POST | `/api/settings/performance-review-goals` | `settings.json` | Создать цель |
| `settingsPrGoalsCreate` | GET | `/api/settings/performance-review-goals/create` | `settings.json` | Форма создания цели |
| `settingsPrGoalsEdit` | GET | `/api/settings/performance-review-goals/{performance_review_goal}/edit` | `settings.json` | Форма редактирования цели |
| `settingsPrGoalsUpdate` | PUT | `/api/settings/performance-review-goals/{performance_review_goal}` | `settings.json` | Обновить цель |
| `settingsPrGoalsDestroy` | DELETE | `/api/settings/performance-review-goals/{performance_review_goal}` | `settings.json` | Удалить цель |
| `settingsPositionSettingsUpdate` | PUT | `/api/settings/position-settings` | `settings.json` | Глобальные настройки должностей |
| `settingsDepartmentsExtIdList` | GET | `/api/settings/departments-ext-id` | `settings.json` | Таблица внешних ID подразделений |
| `settingsDepartmentsExtIdUpdate` | PUT | `/api/settings/departments-ext-id` | `settings.json` | Сохранение внешних ID подразделений |
| `settingsLocationEmployees` | GET | `/api/settings/location/{location}/employees` | `settings.json` | Сотрудники, привязанные к локации |
| `settingsQuestionnaireUpdateSort` | POST | `/api/settings/questionnaire/update-sort` | `settings.json` | Сортировка анкет (роут без реализации) |
| `settingsSearchDivision` | GET | `/api/settings/search-division` | `settings.json` | Поиск подразделений (division) |
| `settingsVacancyFields` | GET | `/api/settings/vacancy-request-fields/vacancy-fields` | `settings.json` | Поля вакансии для привязки к заявке |
| `settingsVacancyResponsibleFilters` | GET | `/api/settings/vacancy-request/responsible-filters` | `settings.json` | Конфигурация фильтров соответственных |
| `settingsCheckListTemplateSearch` | GET | `/api/settings/check-list-templates/search` | `settings.json` | Поиск шаблонов чек-листов (теги) |
| `settingsTeamRoles` | GET | `/api/settings/team-roles` | `settings.json` | Список ролей, которые можно назначать сотрудникам в командах |
| `settingsTeamRolesStore` | POST | `/api/settings/team-roles` | `settings.json` | Создание роли |
| `settingsTeamRolesCreate` | GET | `/api/settings/team-roles/create` | `settings.json` | Создание новой роли |
| `settingsTeamRolesEdit` | GET | `/api/settings/team-roles/{team_role}/edit` | `settings.json` | Редактирование роли |
| `settingsTeamRolesUpdate` | PUT | `/api/settings/team-roles/{team_role}` | `settings.json` | Обновление роли |
| `settingsTeamRolesDestroy` | DELETE | `/api/settings/team-roles/{team_role}` | `settings.json` | Удаление роли |
| `uploadFileChunksV2` | POST | `/api/v2/file/chunks/upload` | `support-v2.json` | Загрузка файла по частям |
| `wikiPageList` | GET | `/api/wiki/pages` | `supportv1.json` | Список страниц документации |
| `wikiPageIdContent` | GET | `/api/wiki/pages/{page}/content` | `supportv1.json` | Контент страницы документации по id |
| `wikiPagePathContent` | GET | `/api/wiki/pages/{path}/content` | `supportv1.json` | Контент страницы документации по Path |
| `wikiSearch` | POST | `/api/wiki/search` | `supportv1.json` | Поиск по страницам документации |
| `downloadFile` | GET | `/api/file/download` | `supportv1.json` | Скачивание файла |
| `downloadPathFile` | GET | `/api/file/download-path` | `supportv1.json` | Получение ссылки на скачивание файла |
| `uploadFile` | POST | `/api/file/upload` | `supportv1.json` | Загрузка файла |
| `uploadImage` | POST | `/api/image/upload` | `supportv1.json` | Загрузка изображения |
| `uploadFileChunks` | POST | `/api/file/chunks/upload` | `supportv1.json` | Загрузка файла по частям |
| `notificationList` | GET | `/api/notifications` | `supportv1.json` | Информация по уведомлениям |
| `notificationViewedAll` | GET | `/api/notifications/viewed-all` | `supportv1.json` | Отметить Все как прочитанное |
| `notificationViewed` | POST | `/api/notifications/viewed` | `supportv1.json` | Отметить прочитанными выбранные уведомления |
| `notificationDestroy` | POST | `/api/notifications/destroy` | `supportv1.json` | Удалить выбранные уведомления |
| `notificationConfig` | GET | `/api/notifications/pusher-info` | `supportv1.json` | Получить данные конфигурации |
| `notificationSettings` | GET | `/api/notifications/settings` | `supportv1.json` | Получить настройки уведомлений |
| `notificationSettingsStore` | PUT | `/api/notifications/settings` | `supportv1.json` | Сохранение настроек уведомлений |
| `notificationsMessengerDisconnect` | POST | `/api/notifications/messenger-disconnect` | `supportv1.json` | Отключение мессенджеров через сервис бота |
| `updateInformation` | GET | `/api/update-information/{update_information}` | `supportv1.json` | Возвращает инфу для модального окна с обновлениями |
| `surveysCreate` | GET | `/api/surveys/create` | `surveys.json` | Поля для создания опроса |
| `surveysList` | GET | `/api/surveys` | `surveys.json` | Список опросов |
| `surveysStore` | POST | `/api/surveys` | `surveys.json` | Создание опроса |
| `surveysEdit` | GET | `/api/surveys/{survey}/edit` | `surveys.json` | Поля для редактирования опроса |
| `surveysShow` | GET | `/api/surveys/{survey}` | `surveys.json` | Обзор |
| `surveysUpdate` | PUT | `/api/surveys/{survey}` | `surveys.json` | Обновление опроса |
| `surveyDestroy` | DELETE | `/api/surveys/{survey}` | `surveys.json` | Удаление опроса |
| `surveysQuestionListEdit` | GET | `/api/surveys/{survey}/edit-questions-list` | `surveys.json` | Поля для редактирования опроса - Вопросы |
| `surveysCopy` | POST | `/api/surveys/{survey}/copy` | `surveys.json` | Копирование опроса |
| `surveysArchive` | POST | `/api/surveys/{survey}/archive` | `surveys.json` | Архивирование опроса |
| `surveyDriverShow` | GET | `/api/surveys/{survey}/drivers/{driver}` | `surveys.json` | Детальная драйвера |
| `surveyHeaderInfo` | GET | `/api/surveys/{survey}/header-info` | `surveys.json` | Информация для шапки на странице опроса |
| `surveysListParticipants` | GET | `/api/surveys/{survey}/list-participants` | `surveys.json` | Список участников |
| `surveysListAllParticipants` | GET | `/api/surveys/{survey}/list-all-participants` | `surveys.json` | Список всех участников без пагинации |
| `surveysCreateParticipantsForm` | GET | `/api/surveys/{survey}/participants/create` | `surveys.json` | Форма добавления участников |
| `surveysAddParticipants` | POST | `/api/surveys/{survey}/participants` | `surveys.json` | Ручное добавление участников |
| `surveysRemoveParticipant` | DELETE | `/api/surveys/{survey}/participants/{participant}` | `surveys.json` | Удаление участника |
| `surveysListQuestions` | GET | `/api/surveys/{survey}/list-questions` | `surveys.json` | Список вопросов |
| `surveysListSections` | GET | `/api/surveys/{survey}/list-sections` | `surveys.json` | Список разделов с вопросами |
| `surveysListComments` | GET | `/api/surveys/{survey}/list-comments` | `surveys.json` | Список комментариев |
| `surveyGradeTable` | GET | `/api/surveys/{survey}/grade-table` | `surveys.json` | Таблица оценок |
| `surveyPublish` | POST | `/api/surveys/{survey}/publish` | `surveys.json` | Публикация опроса |
| `surveyQuestionsStatistic` | GET | `/api/surveys/{survey}/list-questions-statistic` | `surveys.json` | Статистика по вопросам |
| `surveyQuestionAnswers` | GET | `/api/surveys/{survey}/list-questions-statistic/{question}/answers` | `surveys.json` | Ответы по вопросу |
| `b95fe5385c5c669b03ef77cd7f6fe725` | POST | `/api/surveys/{survey}/list-questions-statistic/export` | `surveys.json` | Экспорт статистики опроса |
| `surveyQuestionForParticipant` | GET | `/api/surveys/{survey}/questions-for-participant` | `surveys.json` | Получение вопросов опроса для пользователя |
| `sendAnswer` | PUT | `/api/surveys/questions/{question}/send-answer` | `surveys.json` | Отправить ответ на вопрос |
| `removeRepeatingGroupInstance` | DELETE | `/api/surveys/questions/{question}/repeating-group-instance` | `surveys.json` | Удалить экземпляр повторяющейся группы |
| `surveyGoTo` | POST | `/api/surveys/{survey}/go-to` | `surveys.json` | Переход по разделам |
| `remindParticipantSurvey` | POST | `/api/surveys/{survey}/remind-participants/{participant}` | `surveys.json` | Отправить напоминание участнику о прохождении опроса |
| `remindAllParticipantSurvey` | POST | `/api/surveys/{survey}/remind-all-participants` | `surveys.json` | Отправить напоминание всем активным участникам опроса |
| `surveyQuestionCreate` | GET | `/api/surveys/sections/{section}/question-type/{type}/create` | `surveys.json` | Поля для создания вопроса |
| `surveyQuestionStore` | POST | `/api/surveys/sections/{section}/question-type/{type}/questions` | `surveys.json` | Сохранение вопроса |
| `surveyQuestionEdit` | GET | `/api/surveys/questions/{question}/edit` | `surveys.json` | Поля для редактирования вопроса |
| `questionShow` | GET | `/api/surveys/questions/{question}` | `surveys.json` | Общая информация |
| `surveyQuestionUpdate` | PUT | `/api/surveys/questions/{question}` | `surveys.json` | Обновление вопроса |
| `surveyQuestionDestroy` | DELETE | `/api/surveys/questions/{question}` | `surveys.json` | Удаление вопроса |
| `surveyQuestionCopy` | POST | `/api/surveys/questions/{question}/copy` | `surveys.json` | Копирование вопроса |
| `surveyQuestionSort` | PUT | `/api/surveys/sections/{section}/questions-sort` | `surveys.json` | Сортировка вопросов |
| `questionHeaderInfo` | GET | `/api/surveys/questions/{question}/header-info` | `surveys.json` | Информация для шапки на детальной вопроса |
| `questionSegments` | GET | `/api/surveys/questions/{question}/segments` | `surveys.json` | Сегменты |
| `questionAnswers` | GET | `/api/surveys/questions/{question}/answers` | `surveys.json` | Ответы |
| `questionComments` | GET | `/api/surveys/questions/{question}/comments` | `surveys.json` | Комментарии |
| `surveySectionCreate` | GET | `/api/surveys/sections/create` | `surveys.json` | Поля для создания раздела |
| `surveySectionStore` | POST | `/api/surveys/{survey}/sections` | `surveys.json` | Создание раздела |
| `surveySectionEdit` | GET | `/api/surveys/sections/{section}/edit` | `surveys.json` | Редактирование раздела |
| `surveySectionUpdate` | PUT | `/api/surveys/sections/{section}` | `surveys.json` | Обновление раздела |
| `surveySectionDestroy` | DELETE | `/api/surveys/sections/{section}` | `surveys.json` | Удаление раздела |
| `surveySectionSort` | POST | `/api/surveys/{survey}/sort-sections` | `surveys.json` | Сортировка разделов опроса |
| `surveyTemplatesList` | GET | `/api/survey-templates` | `surveys.json` | Список шаблонов |
| `surveyTemplateDetail` | GET | `/api/survey-templates/{template}` | `surveys.json` | Содержимое шаблона |
| `surveyTemplateStore` | POST | `/api/survey-templates/{template}` | `surveys.json` | Создание опроса на основе шаблона |
| `surveysQuestionsSectionExport` | POST | `/api/surveys/questions/{questions}/{section}/export` | `surveys.json` | Экспорт cекций вопросов из опроса |
| `surveysQuestionsExport` | POST | `/api/surveys/questions/{questions}/exportOverview` | `surveys.json` | Экспорт вопросов из опроса |
| `surveysSectionExport` | POST | `/api/surveys/{survey}/{section}/export` | `surveys.json` | Экспорт секций опросов  |
| `surveysExport` | POST | `/api/surveys/{survey}/exportOverview` | `surveys.json` | Экспорт опросов  |
| `userOnboardingStepsListV2` | GET | `/api/v2/users/{user}/onboarding-list` | `users-v2.json` | Получение списка этапов и уровней по привязанному онбордингу |
| `userOffboardingStepsListV2` | GET | `/api/v2/users/{user}/offboarding-list` | `users-v2.json` | Получение списка этапов и уровней по привязанному оффбордингу |
| `userBoardingEdit` | GET | `/api/v2/users/{user}/boarding/{boarding}/edit` | `users-v2.json` | Форма редактирования онбординга |
| `userBoardingEditLevels` | GET | `/api/v2/users/{user}/boarding/{boarding}/levels` | `users-v2.json` | Уровни программы для формы редактирования онбординга |
| `userBoardingUpdate` | PUT | `/api/v2/users/{user}/boarding/{boarding}` | `users-v2.json` | Обновление онбординга |
| `userBoardingLevelsSortV2` | POST | `/api/v2/boardings/{boarding}/levels/sort` | `users-v2.json` | Сортировка уровней назначенной программы |
| `userBoardingLevelEditV2` | GET | `/api/v2/boardings/levels/{level}/edit` | `users-v2.json` | Форма редактирования уровня |
| `userBoardingLevelUpdateV2` | PUT | `/api/v2/boardings/levels/{level}` | `users-v2.json` | Обновление уровня |
| `userBoardingLevelDeleteV2` | DELETE | `/api/v2/boardings/levels/{level}` | `users-v2.json` | Удаление уровня |
| `userBoardingLevelStepsListV2` | GET | `/api/v2/boardings-levels/levels/{level}/steps` | `users-v2.json` | Список этапов уровня |
| `userBoardingLevelStepStoreV2` | POST | `/api/v2/boardings-levels/levels/{level}/steps` | `users-v2.json` | Создание этапа уровня |
| `userBoardingLevelStepsSortV2` | POST | `/api/v2/boardings-levels/levels/{level}/steps/sort` | `users-v2.json` | Сортировка этапов уровня |
| `userBoardingLevelStepCreateFormV2` | GET | `/api/v2/boardings-levels/levels/{level}/steps/type/{type}/create` | `users-v2.json` | Форма добавления этапа |
| `userBoardingLevelStepEditV2` | GET | `/api/v2/boardings-levels/steps/{step}/edit` | `users-v2.json` | Форма редактирования этапа |
| `userBoardingLevelStepUpdateV2` | PUT | `/api/v2/boardings-levels/steps/{step}` | `users-v2.json` | Обновление этапа |
| `userBoardingLevelStepDeleteV2` | DELETE | `/api/v2/boardings-levels/steps/{step}` | `users-v2.json` | Удаление этапа |
| `userBoardingProgramHistoryV2` | GET | `/api/v2/boardings/{boarding}/history` | `users-v2.json` | История назначенной программы |
| `searchChatsV2` | GET | `/api/v2/users/chatify/search` | `users-v2.json` | Поиск по чатам с пагинацией |
| `teamList` | GET | `/api/v2/teams` | `users-v2.json` | Выводит список всех команд |
| `storeTeam` | POST | `/api/v2/teams` | `users-v2.json` | Создание новой команды |
| `createTeam` | GET | `/api/v2/teams/create` | `users-v2.json` | Форма создания команды |
| `showTeam` | GET | `/api/v2/teams/{team}` | `users-v2.json` | Участники команды |
| `updateTeam` | PUT | `/api/v2/teams/{team}` | `users-v2.json` | Редактирование команды |
| `deleteTeam` | DELETE | `/api/v2/teams/{team}` | `users-v2.json` | Удаление команды |
| `editTeam` | GET | `/api/v2/teams/{team}/edit` | `users-v2.json` | Форма редактирования команды |
| `archiveTeam` | PUT | `/api/v2/teams/{team}/archive` | `users-v2.json` | Архивирование команды |
| `myTeamList` | GET | `/api/v2/my-teams` | `users-v2.json` | Выводит список всех команд в которых состоит сотрудник |
| `teamMembers` | GET | `/api/v2/teams/{team}/members` | `users-v2.json` | Участники команды для выборки в форме |
| `teamStructure` | GET | `/api/v2/teams/{team}/structure` | `users-v2.json` | Структура команды |
| `teamStructureUpdate` | PUT | `/api/v2/teams/{team}/structure` | `users-v2.json` | Изменение структуры команды |
| `teamStructureEdit` | GET | `/api/v2/teams/{team}/structure/edit` | `users-v2.json` | Редактирование структуры команды |
| `getUserListV2` | GET | `/api/v2/users/get-list` | `users-v2.json` | Список сотрудников с фильтром |
| `userDismissalFormV2` | GET | `/api/v2/users/{user}/dismissal-form` | `users-v2.json` | Форма увольнения (v2) |
| `userDismissalResponsibleBoardingUsers` | GET | `/api/v2/users/{user}/boarding/responsible-users` | `users-v2.json` | Сотрудники с онбордингом, где пользователь ответственный |
| `userDismissalMentoredBoardingUsers` | GET | `/api/v2/users/{user}/boarding/mentored-users` | `users-v2.json` | Сотрудники с онбордингом, где пользователь наставник |
| `userDismissalSubordinateUsers` | GET | `/api/v2/users/{user}/subordinates` | `users-v2.json` | Подчинённые сотрудника |
| `userDismissalTeamSubordinateUsers` | GET | `/api/v2/users/{user}/team-subordinates` | `users-v2.json` | Участники команд, где пользователь руководитель |
| `userProfileData` | GET | `/api/v2/users/{user}` | `users-v2.json` | Выводит данные пользователя для верхнего и левого блоков |
| `userProfileTabWork` | GET | `/api/v2/users/{user}/work` | `users-v2.json` | Выводит данные пользователя для раздела Работа |
| `userProfileTabWorkPartTimeUserHistory` | GET | `/api/v2/users/{user}/part-timers/history` | `users-v2.json` | Блок Совместительство. Таб История |
| `userProfileTabWorkPartTimeUsers` | GET | `/api/v2/users/{user}/part-timers` | `users-v2.json` | Блок Совместительство |
| `userProfileTabWorkPartTimeUserStore` | POST | `/api/v2/users/{user}/part-timers` | `users-v2.json` | Создание совместительства сотрудника |
| `userProfileTabWorkPartTimeUserCreate` | GET | `/api/v2/users/{user}/part-timers/create` | `users-v2.json` | Форма для создания совместительства Сотрудника |
| `userProfileTabWorkPartTimeUserEdit` | GET | `/api/v2/users/part-timers/{part_time_user}/edit` | `users-v2.json` | Форма для обновления совместительства Сотрудника |
| `userProfileTabWorkPartTimeUserUpdate` | PUT | `/api/v2/users/part-timers/{part_time_user}` | `users-v2.json` | Обновление совместительства сотрудника |
| `userProfileTabWorkPartTimeUserDestroy` | DELETE | `/api/v2/users/part-timers/{part_time_user}` | `users-v2.json` | Удаление совместительства сотрудника |
| `userProfileTabWorkHireDate` | PUT | `/api/v2/users/{user}/hire-date` | `users-v2.json` | Обновление даты найма сотрудника |
| `userProfileTabWorkUserManagerHistory` | GET | `/api/v2/users/{user}/managers/history` | `users-v2.json` | Блок Руководители. Таб История |
| `userProfileTabWorkUserManagers` | GET | `/api/v2/users/{user}/managers` | `users-v2.json` | Блок Руководители |
| `userProfileTabWorkUserManagersStore` | POST | `/api/v2/users/{user}/managers` | `users-v2.json` | Создание руководителя сотрудника |
| `userProfileTabWorkUserManagersCreate` | GET | `/api/v2/users/{user}/managers/create` | `users-v2.json` | Форма для создания руководителя Сотрудника |
| `userProfileTabWorkUserManagersEdit` | GET | `/api/v2/users/managers/{manager}/edit` | `users-v2.json` | Форма для обновления руководителя Сотрудника |
| `userProfileTabWorkUserManagersUpdate` | PUT | `/api/v2/users/managers/{manager}` | `users-v2.json` | Обновление руководителя сотрудника |
| `userProfileTabWorkUserManagersDestroy` | DELETE | `/api/v2/users/managers/{manager}` | `users-v2.json` | Удаление руководителя сотрудника |
| `userProfileTabWorkUserManagersChangeForm` | GET | `/api/v2/users/{user}/managers/change-form/{type}` | `users-v2.json` | Форма для изменения руководителя Сотрудника из орг структуры |
| `userProfileTabWorkUserManagersChange` | POST | `/api/v2/users/{user}/managers/change/{type}` | `users-v2.json` | Изменение руководителя сотрудника |
| `userAbsencesList` | GET | `/api/users/{user}/absences` | `users.json` | Информация по отсуствиям пользователя |
| `editUserAbsence` | GET | `/api/users/{user}/absences/{absence}` | `users.json` | Форма для обновления отсуствия |
| `updateUserAbsence` | POST | `/api/users/{user}/absences/{absence}` | `users.json` | Изменение политики Сотрудника |
| `deleteUserAbsence` | DELETE | `/api/users/{user}/absences/{absence}` | `users.json` | Удаление политики у Сотрудника |
| `userAbsenceHistoryList` | GET | `/api/users/{user}/absences/{absence}/history` | `users.json` | Информация по истории отсутствия пользователя |
| `userAbsenceHistoryStore` | POST | `/api/users/{user}/absences/{absence}/history` | `users.json` | Создание корректировки отсутствия |
| `userAbsenceHistoryCreate` | GET | `/api/users/{user}/absences/history` | `users.json` | Форма корректировки отсутствия |
| `userAbsenceHistoryDelete` | DELETE | `/api/users/{user}/absences/history/{history}` | `users.json` | Удаление корректировки отсутствия |
| `userAbsenceHistoryDownload` | GET | `/api/users/{user}/absences/{absence}/history/download` | `users.json` | Выгрузка истории отсутствия в файл |
| `userAbsenceRequestsList` | GET | `/api/users/{user}/absences-requests` | `users.json` | Список запросов отсутствия |
| `userAbsenceSubstituteRequest` | GET | `/api/users/{user}/absences-substitute` | `users.json` | Список замещений на отсутствия |
| `userAbsenceSubstituteCheck` | GET | `/api/users/substitute/{substitute}/check` | `users.json` | Проверка выбранного заместителя |
| `userAbsenceSubstituteDelete` | GET | `/api/users/{user}/delete-absences-substitute` | `users.json` | Снять заместителя с текущего отсутствия |
| `createUserAbsenceRequestCreate` | GET | `/api/users/{user}/absence-type/{absence_type}/request/create` | `users.json` | Форма запроса отсутствия |
| `userAbsenceRequestEdit` | GET | `/api/users/request/{request}/edit` | `users.json` | Форма редактирования запроса отсутствия |
| `userAbsenceRequestUpdate` | PUT | `/api/users/request/{request}` | `users.json` | Обновление текущего запроса пользователя |
| `userAbsenceRequestCreateEmpty` | GET | `/api/users/{user}/request/create` | `users.json` | Форма запроса отсутствия без типа |
| `userAbsenceRequestDays` | GET | `/api/users/{user}/absence-type/{absence_type}/by-days` | `users.json` | Запрос разбивки по дням |
| `userAbsenceRequestIntersections` | GET | `/api/users/{user}/request/intersections` | `users.json` | Запрос пересечения отпусков |
| `userAbsenceRequestByType` | GET | `/api/users/{user}/absence-type/{absence_type}/request` | `users.json` | Список запросов отсутствия (resource index) |
| `userAbsenceRequestStore` | POST | `/api/users/{user}/absence-type/{absence_type}/request` | `users.json` | Cохранение нового запроса пользователя |
| `userAbsenceRequestShow` | GET | `/api/request/{request}` | `users.json` | Детальная страница запроса отсутствия |
| `userAbsenceRequestDelete` | DELETE | `/api/request/{request}` | `users.json` | Удаление запроса отсутствия |
| `userAbsenceRequestModal` | GET | `/api/request/{request}/modal` | `users.json` | Модальная страница запроса отсутствия |
| `userAbsenceRequestCancel` | GET | `/api/request/{request}/cancel` | `users.json` | Отмена запроса отсутствия |
| `userAbsenceRequestReject` | GET | `/api/request/{request}/reject` | `users.json` | Отклонение запроса отсутствия |
| `userAbsenceRequestApprove` | GET | `/api/request/{request}/approve` | `users.json` | Согласование / подтверждение / исполнение запроса отсутствия |
| `userAbsenceRequestComment` | POST | `/api/request/{request}/comment` | `users.json` | Добавление комментария для запроса отсутствия |
| `userAbsenceRequestCommentEdit` | GET | `/api/request/comments/{comment}/edit` | `users.json` | Запрос отсутствия поля для редактирования комментария |
| `userAbsenceRequestCommentUpdate` | PUT | `/api/request/comments/{comment}` | `users.json` | Обновление комментария для запроса отсутствия |
| `userAbsenceRequestCommentDelete` | DELETE | `/api/request/comments/{comment}` | `users.json` | Удаление комментария у запроса отсутствия |
| `absenceRequestQueueFor1C` | POST | `/api/absence-requests/{id}/queue-for-1c` | `users.json` | Отправить заявку в очередь 1С |
| `userAbsenceRequestTransferForm` | GET | `/api/request/{request}/transfer` | `users.json` | Форма переноса дат отсутствия |
| `userAbsenceRequestTransferStore` | POST | `/api/request/{request}/transfer` | `users.json` | Создать запрос на перенос дат отсутствия |
| `userAbsenceRequestTransferHistory` | GET | `/api/request/{request}/transfers` | `users.json` | История переносов дат отсутствия |
| `userAbsenceRequestTransferDecision` | POST | `/api/request/{request}/transfer/approve` | `users.json` | Одобрить перенос дат отсутствия |
| `userAbsenceRequestTransferReject` | POST | `/api/request/{request}/transfer/reject` | `users.json` | Отклонить перенос дат отсутствия |
| `userAccountInfo` | GET | `/api/users/{user}/account` | `users.json` | Данные для настроек учетной записи сотрудника |
| `userResetPasswordForm` | GET | `/api/users/reset-password` | `users.json` | Форма изменение пароля |
| `userResetPassword` | POST | `/api/users/reset-password` | `users.json` | Изменение пароля |
| `userTwofaForm` | GET | `/api/users/{user}/twofa` | `users.json` | Данные для формы подключения двухфакторной аутентификации |
| `userTwofaConfirm` | POST | `/api/users/{user}/twofa` | `users.json` | Подтверждение подключения двухфакторной аутентификации |
| `userTwofaDestroy` | DELETE | `/api/users/{user}/twofa` | `users.json` | Отключение двухфакторной аутентификации |
| `bulkOnboardingStore` | POST | `/api/users/onboarding/bulk` | `users.json` | Массовое назначение онбординга |
| `userListForSelect` | GET | `/api/users/select` | `users.json` | Список пользователей |
| `userListForSelectLight` | GET | `/api/users/select-light` | `users.json` | Облегченный список пользователей |
| `userListWithFilter` | POST | `/api/users/list-with-filter` | `users.json` | Список пользователей |
| `userAdminSupport` | POST | `/api/users/admin-support` | `users.json` | Список пользователей для суперадминки |
| `userCountWithFilter` | POST | `/api/users/count-with-filter` | `users.json` | Количество пользователей |
| `listUserFilter` | POST | `/api/users/list-user-filter` | `users.json` | Список пользователей по фильтру с пагинацией |
| `userListUserAbsenceFilterGet` | GET | `/api/users/list-user-absence-filter` | `users.json` | Список пользователей с отсутствиями (GET) |
| `userListUserAbsenceFilter` | POST | `/api/users/list-user-absence-filter` | `users.json` | Список пользователей с отсутствиями |
| `userAvatarUpdate` | PUT | `/api/users/{user}/update-avatar` | `users.json` | Обновление аватара пользователя |
| `userAvatarUpdateAndCrop` | PUT | `/api/users/{user}/update-and-crop-avatar` | `users.json` | Обновление и обрезка аватара пользователя |
| `userAvatarGet` | GET | `/api/users/{user}/get-avatar` | `users.json` | Получение аватара |
| `userAvatarDelete` | DELETE | `/api/users/{user}/delete-avatar` | `users.json` | Удаление аватара пользователя |
| `getCoordinatesCropAvatar` | GET | `/api/users/{user}/get-coordinates-crop-avatar` | `users.json` | Получение координат обрезки аватара пользователя |
| `sendInvite` | POST | `/api/send-invite/{user}` | `users.json` | Отправить приглашение в систему |
| `userLanguageUpdate` | POST | `/api/users/change-lang` | `users.json` | Обновление языка пользователя |
| `gamificationCoinStore` | POST | `/api/users/{user}/sendCoin` | `users.json` | Поделится монетами |
| `favouriteMenuStore` | POST | `/api/add-favourite-item` | `users.json` | Добавить элемент в избранное |
| `favouriteMenuDelete` | DELETE | `/api/del-favourite-item` | `users.json` | Удалить элемент меню из избранное |
| `userListForSelectCustom` | GET | `/api/users/select-custom` | `users.json` | Список пользователей |
| `saveUserSettingPage` | POST | `/api/users/setting-page` | `users.json` | Сохранение настроек страницы пользователя |
| `getDeadlineKanban` | GET | `/api/users/deadline-kanban` | `users.json` | Получение канбана Сроки |
| `getDeadlineKanbanStageTasks` | GET | `/api/users/deadline-kanban/stage/{stageCode}/tasks` | `users.json` | Получение задач этапа |
| `createDeadlineKanbanTask` | POST | `/api/users/deadline-kanban/stage/{stageCode}/tasks` | `users.json` | Создание задачи в этапе Сроки |
| `moveDeadlineKanbanTask` | POST | `/api/users/deadline-kanban/tasks/{task}/stages` | `users.json` | Перемещение задачи между этапами |
| `getCertificatesListEdms` | GET | `/api/users/{user}/edms/certificates` | `users.json` | Сертификаты |
| `getPassportDataEdms` | GET | `/api/users/{user}/edms/user-data` | `users.json` | Данные сотрудника |
| `changeAgreeEDMS` | PUT | `/api/users/{user}/edms/change-agree-edms` | `users.json` | Данные сотрудника |
| `editSnils` | GET | `/api/users/{user}/edit-snils` | `users.json` | Поля для формы редактирования СНИЛС |
| `updateSnils` | PUT | `/api/users/{user}/update-snils` | `users.json` | Обновление СНИЛС |
| `editPassport` | GET | `/api/users/{user}/edit-passport` | `users.json` | Поля для формы редактирования паспорта |
| `updatePasport` | PUT | `/api/users/{user}/update-passport` | `users.json` | Обновление паспорта |
| `userEfficiencyKpi` | GET | `/api/users/{user}/efficiency/kpi` | `users.json` | Данные для вкладки KPI |
| `userEfficiencyObjectives` | GET | `/api/users/{user}/efficiency/objectives` | `users.json` | Данные для вкладки Цели |
| `userEfficiencyEvaluation` | GET | `/api/users/{user}/efficiency/evaluation` | `users.json` | Данные для вкладки Оценка |
| `userEfficiencyPerformanceReviews` | GET | `/api/users/{user}/efficiency/performance-reviews` | `users.json` | Performance review |
| `userEfficiencyEvaluationIdpFormation` | GET | `/api/users/{user}/efficiency/evaluations/{evaluation}/idp-formation` | `users.json` | Данные для формирования ИПР из оценки |
| `userEfficiencyEvaluationIdpDraft` | POST | `/api/users/{user}/efficiency/evaluations/{evaluation}/idp-draft` | `users.json` | Создать черновик ИПР из оценки |
| `userEvaluationsList` | GET | `/api/users/evaluations` | `users.json` | Список оценок |
| `userEvaluationShow_api_users_evaluations_evaluation` | GET | `/api/users/evaluations/{evaluation}` | `users.json` | Деталка цикла оценки |
| `userEvaluationAddColleagues` | POST | `/api/users/evaluations/{user_evaluation}/add-colleagues` | `users.json` | Назначение коллег |
| `userEvaluationAnswers` | POST | `/api/users/evaluations/{user_evaluation}/answers` | `users.json` | Сохранение ответов на вопросы |
| `chatifyPusherAuth` | POST | `/api/users/chatify/auth` | `users.json` | Авторизация Pusher |
| `getChatInfo` | GET | `/api/users/chatify/get-chat-info/{chat}` | `users.json` | Данные о чате |
| `createChat` | POST | `/api/users/chatify/create-chat` | `users.json` | Создание/открытие чата |
| `createGroupChat` | POST | `/api/users/chatify/group-chat` | `users.json` | Создание группового чата |
| `updateGroupChat` | PUT | `/api/users/chatify/group-chat` | `users.json` | Обновление группового чата |
| `groupChatFormCreate` | PUT | `/api/users/chatify/group-chat/create` | `users.json` | Данные для формы создания группового чата |
| `groupChatFormEdit` | PUT | `/api/users/chatify/group-chat/{chat}/edit` | `users.json` | Данные для формы редактирования группового чата |
| `groupChatParticipantsAddForm` | GET | `/api/users/chatify/{chat}/participants/add` | `users.json` | Данные для формы добавления участников группового чата |
| `chatGetParticipants` | GET | `/api/users/chatify/{chat}/participants` | `users.json` | Список участников группового чата |
| `groupChatAddParticipants` | PUT | `/api/users/chatify/{chat}/participants` | `users.json` | Добавление участников в групповой чат |
| `chatifyRemoveParticipant` | DELETE | `/api/users/chatify/{chat}/participants/{user}` | `users.json` | Удалить участника чата |
| `sendChatMessage` | POST | `/api/users/chatify/send-message/{chat}` | `users.json` | Отправка сообщения |
| `getChatMessages` | GET | `/api/users/chatify/get-chat-messages/{chat}` | `users.json` | Список сообщений |
| `getContacts` | GET | `/api/users/chatify/get-contacts` | `users.json` | Список чатов |
| `searchChats` | GET | `/api/users/chatify/search` | `users.json` | Поиск по чатам |
| `makeMessageSeen` | POST | `/api/users/chatify/{message}/seen` | `users.json` | Отметить сообщение просмотренным |
| `makeMessageSeenAndRead` | POST | `/api/users/chatify/{message}/read` | `users.json` | Отметить сообщение прочитанным текущим пользователем и просмотренным |
| `destroyMessages` | DELETE | `/api/users/chatify/{chat}/delete-messages` | `users.json` | Удаление сообщений |
| `editMessage` | PUT | `/api/users/chatify/{chat}/{message}` | `users.json` | Редактирование сообщений |
| `chatClearHistory` | DELETE | `/api/users/chatify/{chat}/clear-history` | `users.json` | Очистка истории сообщений |
| `chatMute` | POST | `/api/users/chatify/{chat}/mute` | `users.json` | Выключить уведомления чата |
| `chatUnmute` | POST | `/api/users/chatify/{chat}/unmute` | `users.json` | Включить уведомления чата |
| `chatLeave` | POST | `/api/users/chatify/{chat}/leave` | `users.json` | Выйти из чата |
| `chatDelete` | POST | `/api/users/chatify/{chat}/delete-chat` | `users.json` | Удалить чат |
| `multiActionsUsers` | POST | `/api/multi-actions/users` | `users.json` | Операции со списком сотрудников |
| `multiActionsCandidates` | POST | `/api/multi-actions/candidates` | `users.json` | Операции со списком кандидиатов |
| `multiActionsVacancyCandidates` | POST | `/api/multi-actions/vacancy-candidates/{vacancy}` | `users.json` | Операции со списком кандидиатов в вакансии |
| `multiActionsVacancyCandidate` | POST | `/api/multi-actions/vacancy-candidates/{vacancy}/candidate/{candidate}` | `users.json` | Операции со списком кандидиатов в вакансии |
| `getPersonalKanban` | GET | `/api/users/personal-kanban` | `users.json` | Получение персонального канбана |
| `getPersonalKanbanStageCreate` | GET | `/api/users/personal-kanban/stage/create` | `users.json` | Форма создания этапа |
| `storePersonalKanbanStage` | POST | `/api/users/personal-kanban/stage` | `users.json` | Создание этапа |
| `getPersonalKanbanStageEdit` | GET | `/api/users/personal-kanban/stage/{stage}/edit` | `users.json` | Форма редактирования этапа |
| `updatePersonalKanbanStage` | PUT | `/api/users/personal-kanban/stage/{stage}` | `users.json` | Обновление этапа |
| `destroyPersonalKanbanStage` | DELETE | `/api/users/personal-kanban/stage/{stage}` | `users.json` | Удаление этапа |
| `getPersonalKanbanStageDestroyForm` | GET | `/api/users/personal-kanban/stage/{stage}/destroy-form` | `users.json` | Форма удаления этапа |
| `sortPersonalKanbanStages` | POST | `/api/users/personal-kanban/stages/sort` | `users.json` | Сортировка этапов |
| `movePersonalKanbanTask` | POST | `/api/users/personal-kanban/tasks/{task}/stages` | `users.json` | Перемещение задачи между этапами |
| `getPersonalKanbanStageTasks` | GET | `/api/users/personal-kanban/stage/{stage}/tasks` | `users.json` | Получение задач этапа |
| `getTabsListEdms` | GET | `/api/users/{user}/tabs/edms` | `users.json` | КЭДО |
| `TaskCommentIndex` | GET | `/api/tasks/{task}/comments` | `users.json` | Список комментариев к задаче |
| `TaskCommentStore` | POST | `/api/tasks/{task}/comments` | `users.json` | Добавление нового комментария |
| `TaskCommentEdit` | GET | `/api/task-comment/{comment}/edit` | `users.json` | Форма редактирования комментария |
| `TaskCommentUpdate` | PUT | `/api/task-comment/{comment}` | `users.json` | Обновление комментария |
| `TaskCommentDelete` | DELETE | `/api/task-comment/{comment}` | `users.json` | Удаление комментария |
| `userManageTasksList` | GET | `/api/manage-tasks` | `users.json` | Список всех задач - Управлять задачами |
| `manageTasksListWithFilter` | POST | `/api/manage-tasks` | `users.json` | Список всех задач с фильтрацией - Управлять задачами |
| `getUsersTeamList` | GET | `/api/users/teams` | `users.json` | Список команд |
| `getUsersTeamStore` | POST | `/api/users/teams` | `users.json` | Создание команды |
| `getUsersTeamPaginatedList` | GET | `/api/users/teams-list` | `users.json` | Список команд |
| `getUsersTeamCreate` | GET | `/api/users/teams/create` | `users.json` | Данные для формы создания команды |
| `usersTeamShow` | GET | `/api/users/teams/{team}` | `users.json` | Список участников команды |
| `getUsersTeamUpdate` | PUT | `/api/users/teams/{team}` | `users.json` | Изменение данных команды |
| `usersTeamDestroy` | DELETE | `/api/users/teams/{team}` | `users.json` | Удаление команды |
| `getUsersTeamEdit` | GET | `/api/users/teams/{team}/edit` | `users.json` | Данные для формы редактирования команды |
| `archiveTeamUpdate` | PUT | `/api/users/teams/{team}/archive` | `users.json` | архивация команды |
| `getUsersTeams` | GET | `/api/users/{user}/teams` | `users.json` | Список команд сотрудника |
| `teamTasksExport` | POST | `/api/users/teams/{team}/tasks/export` | `users.json` | Экспорт задач команды |
| `getTeamTaskList` | GET | `/api/users/teams/{team}/tasks` | `users.json` | Канбан |
| `getTeamStageCreate` | GET | `/api/users/teams/{team}/stage/create` | `users.json` | Данные для формы создания стадии канбана |
| `getTeamStageStore` | POST | `/api/users/teams/{team}/stage` | `users.json` | Создание стадии канбана |
| `getTeamStageEdit` | GET | `/api/users/teams/stage/{stage}/edit` | `users.json` | Данные для формы редактирования стадии канбана |
| `getTeamStageUpdate` | PUT | `/api/users/teams/stage/{stage}` | `users.json` | Изменение данных стадии канбана |
| `usersTeamStageDestroy` | DELETE | `/api/users/teams/stage/{stage}` | `users.json` | Удаление стадии канбана |
| `getTeamStageFormDestroy` | GET | `/api/users/teams/teams/stage/{stage}/destroy-form` | `users.json` | Форма удаления стадии канбана |
| `teamStageSort` | POST | `/api/users/teams/{team}/stages/sort` | `users.json` | Обновление сортировок этапов канбана |
| `teamTaskStageChange` | POST | `/api/users/teams/tasks/{task}/stages` | `users.json` | Изменение этапа задачи канбана |
| `userTeamTaskUpdate` | PUT | `/api/users/teams/tasks/{task}` | `users.json` | Быстрое обновление задачи |
| `teamTaskStageSort` | POST | `/api/users/teams/stage/{stage}/sort-task` | `users.json` | Сортировка задач в этапах канбана |
| `getTeamStageTaskList` | GET | `/api/users/teams/{team}/stage/{stage}/tasks` | `users.json` | Канбан |
| `userAssetList` | GET | `/api/users/{user}/assets` | `users.json` | Список имущества пользователя |
| `userAssetStore` | POST | `/api/users/{user}/assets` | `users.json` | Сохранение нового имущества |
| `userAssetCreate` | GET | `/api/user-assets/create` | `users.json` | Поля для формы назначения имущества |
| `userAssetEdit` | GET | `/api/user-assets/{asset}/edit` | `users.json` | Форма для редактирования имущества |
| `userAssetUpdate` | PUT | `/api/user-assets/{asset}` | `users.json` | Обновление имущества сотрудника |
| `userAssetDestroy` | DELETE | `/api/user-assets/{asset}` | `users.json` | Удаление имущества сотрудника |
| `userBoardingTasksList` | GET | `/api/users/{user}/boarding-tasks-list` | `users.json` | Получение списка задач по привязанному бордингу |
| `userOnboardingStepsList_api_users_user_onboarding_list` | GET | `/api/users/{user}/onboarding-list` | `users.json` | Получение списка этапов и уровней по привязанному онбордингу |
| `userOffboardingStepsList` | GET | `/api/users/{user}/offboarding-list` | `users.json` | Получение списка этапов и уровней по привязанному оффбордингу |
| `userBoardingMaterialStep` | GET | `/api/users/{user}/boarding/step/{step}` | `users.json` | Детали этапа бординга |
| `userBoardingMaterialCompleted_api_users_user_boarding_step_step_completed` | GET | `/api/users/{user}/boarding/step/{step}/completed` | `users.json` | Прохождение этапа бординга |
| `userBoardingTasksCreate` | GET | `/api/users/{user}/{type_boarding}/create` | `users.json` | Получение полей для формы назначения бординга |
| `userOnboardingTasksStore` | POST | `/api/users/{user}/onboarding` | `users.json` | Назначение онбординга пользователю |
| `userOffboardingTasksStore` | POST | `/api/users/{user}/offboarding` | `users.json` | Назначение оффбординга пользователю |
| `userOffboardingPastStepsCheck` | POST | `/api/users/offboarding/past-steps/check` | `users.json` | Проверка этапов оффбординга с датой начала в прошлом |
| `userDeleteBoardingById` | DELETE | `/api/users/{user}/boarding/{boarding}` | `users.json` | Удаление бординга пользователя |
| `userBoardingHelp` | GET | `/api/users/{user}/boarding/help` | `users.json` | Сообщить о проблеме |
| `userCertificateList` | GET | `/api/users/{user}/certificates` | `users.json` | Список сертификатов пользователя |
| `userCertificateStore` | POST | `/api/users/{user}/certificates` | `users.json` | Сохранение нового сертификата |
| `userCertificateCreate` | GET | `/api/users/{user}/certificates/create` | `users.json` | Поля для формы создания нового сертификата |
| `userCertificateEdit` | GET | `/api/users/{user}/certificates/{certificate}/edit` | `users.json` | Форма для редактирования сертификата |
| `userCertificateUpdate` | PUT | `/api/users/{user}/certificates/{certificate}` | `users.json` | Обновление сертификата сотрудника |
| `userCertificateDestroy` | DELETE | `/api/users/{user}/certificates/{certificate}` | `users.json` | Удаление сертификата сотрудника |
| `userAdditionalCompensationList` | GET | `/api/users/{user}/compensations` | `users.json` | Список всех дополнительных компенсаций пользователя |
| `userAdditionalCompensationStore` | POST | `/api/users/{user}/compensations` | `users.json` | Сохранение новой компенсации |
| `userAdditionalCompensationCreate` | GET | `/api/users/{user}/compensations/create` | `users.json` | Поля для формы создания новой компенсации |
| `userAdditionalCompensationEdit` | GET | `/api/compensations/{compensation}/edit` | `users.json` | Форма для редактирования дополнительных компенсаций |
| `userAdditionalCompensationUpdate` | PUT | `/api/compensations/{compensation}` | `users.json` | Обновление дополнительных компенсаций сотрудника |
| `userAdditionalCompensationDestroy` | DELETE | `/api/compensations/{compensation}` | `users.json` | Удаление дополнительных компенсаций сотрудника |
| `getEmployeesList` | GET | `/api/users` | `users.json` | Список сотрудников |
| `userStore` | POST | `/api/users` | `users.json` | Сохранение нового сотрудника |
| `getEmployeesListWithFilterMobile` | POST | `/api/users/users-with-filter` | `users.json` | Список сотрудников с фильтром |
| `getEmployeesListWithFilter` | POST | `/api/users/get-list` | `users.json` | Список сотрудников с фильтром |
| `userCreate` | GET | `/api/users/create` | `users.json` | Поля для формы создания сотрудника |
| `userShow` | GET | `/api/users/{user}` | `users.json` | Информация о сотруднике |
| `userDestroy` | DELETE | `/api/users/{user}` | `users.json` | Деактивация сотрудника |
| `unlinkUser1C` | DELETE | `/api/users/{user}/unlink-onec` | `users.json` | Отвязать сотрудника от 1С |
| `userIsBriefTourCompleted` | POST | `/api/users/{user}/complete-brief-tour` | `users.json` | Прошёл быстрый тур |
| `userDashbord` | GET | `/api/users/{user}/dashboard` | `users.json` | Дашборд сотрудника |
| `userDashbordStore` | POST | `/api/users/{user}/dashboard` | `users.json` | Сохранение Дашборда |
| `userDashbordMobile` | GET | `/api/users/{user}/dashboard/mobile` | `users.json` | Дашборд сотрудника для МП |
| `userDashbordMobileStore` | POST | `/api/users/{user}/dashboard/mobile` | `users.json` | Сохранение Дашборда для МП |
| `userDashbordResetToDefault` | GET | `/api/users/{user}/dashboard/default-settings` | `users.json` | Сброс настроек дашборда |
| `useDismissalForm` | GET | `/api/users/{user}/dismissal-form` | `users.json` | Поля для формы увольнения сотрудника |
| `userDismissalStore` | POST | `/api/users/{user}/dismissal` | `users.json` | Увольнение и обновление информации по нему |
| `userActivate` | POST | `/api/users/{user}/activate` | `users.json` | Активация/деактивация сотрудника |
| `userCloseDismissal` | POST | `/api/users/{user}/close-dismissal` | `users.json` | Отмена увольнения сотрудника |
| `useDismissalCheckOffboarding` | GET | `/api/users/{user}/check-offboarding` | `users.json` | Проверка на наличие оффбординга у пользователя |
| `userDocumentList` | GET | `/api/users/{user}/documents` | `users.json` | Список документов пользователя |
| `userDocumentStore` | POST | `/api/users/{user}/documents` | `users.json` | Добавление нового документа |
| `userDocumentDestroy` | DELETE | `/api/users/{user}/documents/{document}` | `users.json` | Удаление документа пользователя |
| `userProfileDoodocsIframeUrl` | POST | `/api/users/{user}/doodocs/iframe-url` | `users.json` | Ссылка на встраиваемый интерфейс Doodocs для профиля |
| `userEducationList` | GET | `/api/users/{user}/education` | `users.json` | Список учебных заведений |
| `userEducationStore` | POST | `/api/users/{user}/education` | `users.json` | Сохранение нового учебного заведения |
| `userEducationCreate` | GET | `/api/users/{user}/education/create` | `users.json` | Поля для формы создания нового учебного заведения |
| `userEducationEdit` | GET | `/api/users/{user}/education/{education}/edit` | `users.json` | Форма для редактирования учебного заведения |
| `userEducationUpdate` | PUT | `/api/users/{user}/education/{education}` | `users.json` | Обновление учебного заведения сотрудника |
| `userEducationDestroy` | DELETE | `/api/users/{user}/education/{education}` | `users.json` | Удаление учебного заведения сотрудника |
| `userEmergencyContactList` | GET | `/api/users/{user}/emergency-contacts/` | `users.json` | Список экстренных контактов пользователя |
| `userEmergencyContactStore` | POST | `/api/users/{user}/emergency-contacts/` | `users.json` | Сохранение экстренного контакта |
| `userEmergencyContactCreate` | GET | `/api/users/{user}/emergency-contacts/create` | `users.json` | Поля для формы добавления нового экстренного контакта |
| `userEmergencyContactEdit` | GET | `/api/users/{user}/emergency-contacts/{emergency-contact}/edit` | `users.json` | Форма для редактирования экстренного контакта |
| `userEmergencyContactUpdate` | PUT | `/api/users/{user}/emergency-contacts/{emergency-contact}` | `users.json` | Обновление экстренного контакта |
| `userEmergencyContactDestroy` | DELETE | `/api/users/{user}/emergency-contacts/{emergency-contact}` | `users.json` | Удаление экстренного контакта |
| `userEmploymentList` | GET | `/api/users/{user}/employments` | `users.json` | Список всей занятости пользователя |
| `userEmploymentStore` | POST | `/api/users/{user}/employments` | `users.json` | Сохранение новой занятости |
| `userEmploymentCreate` | GET | `/api/users/{user}/employments/create` | `users.json` | Поля для формы создания новой занятости |
| `userEmploymentEdit` | GET | `/api/users/{user}/employments/{employment}/edit` | `users.json` | Форма для редактирования занятости |
| `userEmploymentUpdate` | PUT | `/api/users/{user}/employments/{employment}` | `users.json` | Обновление занятости сотрудника |
| `userEmploymentDestroy` | DELETE | `/api/users/{user}/employments/{employment}` | `users.json` | Удаление занятости сотрудника |
| `userExport` | POST | `/api/users/export` | `users.json` | Экспорт списка сотрудников |
| `userFieldValueEdit` | GET | `/api/users/{user}/fields-groups/{group}/edit` | `users.json` | Получение формы для редактирования пользовательских полей |
| `userFieldValueUpdate` | PUT | `/api/users/{user}/fields-groups/{group}` | `users.json` | Обновление информации по пользовательским полям сотрудника |
| `userLearningList` | GET | `/api/users/{user}/learning` | `users.json` | Статистика обучения пользователя |
| `userLearningCourseList` | GET | `/api/users/{user}/learning-courses` | `users.json` | Курсы пользователя |
| `userLearningTrainingsList` | GET | `/api/users/{user}/learning-trainings` | `users.json` | Тренинги пользователя |
| `userBottomMenu` | GET | `/api/users/bottom-menu` | `users.json` | Нижнее меню сотрудника |
| `userBottomMenuStore` | POST | `/api/users/bottom-menu` | `users.json` | Сохранение Нижнее меню для МП |
| `userMoodList` | POST | `/api/users/mood-list` | `users.json` | Получение списка со средним значением настроения сотрудников |
| `userMoodCreate` | GET | `/api/user-mood-create` | `users.json` | Форма для мониторинга настроения сотрудника |
| `userMoodStore` | POST | `/api/users/{user}/mood` | `users.json` | Сохранение оценки по текущему настроению сотрудника |
| `userPaySheetList` | GET | `/api/users/{user}/pay-sheets` | `users.json` | Список расчетных листов сотрудника |
| `userPaySheetDownload` | GET | `/api/users/{user}/pay-sheets/download` | `users.json` | Скачать расчетные листы сотрудника |
| `userPaySheetDelete` | DELETE | `/api/users/{user}/pay-sheets/{user-pay-sheet}` | `users.json` | Удаление расчетных листов сотрудника |
| `userPopupsStore` | POST | `/api/users/{user}/popups` | `users.json` | Сохранение состояния попапов сотрудника |
| `userPositionList` | GET | `/api/users/{user}/positions` | `users.json` | Список всех должностей пользователя |
| `userPositionStore` | POST | `/api/users/{user}/positions` | `users.json` | Сохранение новой должности |
| `userPositionCreate` | GET | `/api/users/{user}/positions/create` | `users.json` | Поля для формы создания новой должности  и не только |
| `userPositionEdit` | GET | `/api/users/{user}/positions/{position}/edit` | `users.json` | Форма для редактирования должностей |
| `userPositionUpdate` | PUT | `/api/users/{user}/positions/{position}` | `users.json` | Обновление должностей сотрудника |
| `userPositionDestroy` | DELETE | `/api/users/{user}/positions/{position}` | `users.json` | Удаление должностей сотрудника |
| `userCompensationList` | GET | `/api/users/{user}/salaries` | `users.json` | Список всех зарплат пользователя |
| `userCompensationStore` | POST | `/api/users/{user}/salaries` | `users.json` | Сохранение новой зарплаты |
| `userCompensationCreate` | GET | `/api/users/{user}/salaries/create` | `users.json` | Поля для формы создания новой зарплаты |
| `userCompensationEdit` | GET | `/api/users/{user}/salaries/{salary}/edit` | `users.json` | Форма для редактирования зарплат |
| `userCompensationUpdate` | PUT | `/api/users/{user}/salaries/{salary}` | `users.json` | Обновление зарплат сотрудника |
| `userCompensationDestroy` | DELETE | `/api/users/{user}/salaries/{salary}` | `users.json` | Удаление зарплат сотрудника |
| `getEmployeesPersonal` | GET | `/api/users/{user}/personal-info` | `users.json` | Личное |
| `getEmployeeSkills` | GET | `/api/users/{user}/personal-skills` | `users.json` | Получение списка навыков сотрудника |
| `getEmployeeEducation` | GET | `/api/users/{user}/personal-education` | `users.json` | Получение списка образования сотрудника |
| `getEmployeeCertificates` | GET | `/api/users/{user}/personal-certificates` | `users.json` | Получение списка сертификатов сотрудника |
| `getEmployeesWork` | GET | `/api/users/{user}/work-info` | `users.json` | Работа |
| `getEmployeesPositionsWork` | GET | `/api/users/{user}/work-info-positions` | `users.json` | Работа |
| `getEmployeesEmploymentsWork` | GET | `/api/users/{user}/work-info-employment` | `users.json` | Работа |
| `getEmployeesPayroll` | GET | `/api/users/{user}/payroll-info` | `users.json` | Начисления |
| `getEmployeesSalaryGraph` | GET | `/api/users/{user}/salary-graph` | `users.json` | График зарплаты сотрудника |
| `getEmployeesCompensationsGraph` | GET | `/api/users/{user}/compensations-graph` | `users.json` | График премий сотрудника |
| `getEmployeesSalaryCompensationsGraph` | GET | `/api/users/{user}/salary-compensations-graph` | `users.json` | График премий сотрудника |
| `getEmployeeDeclensionCases` | GET | `/api/users/{user}/declension-cases` | `users.json` | Склонение ФИО по падежам |
| `updateEmployeeDeclensionCases` | PUT | `/api/users/{user}/declension-cases` | `users.json` | Сохранение склонений ФИО |
| `userSkillList` | GET | `/api/users/{user}/skills` | `users.json` | Список всех навыков пользователя |
| `userSkillStore` | POST | `/api/users/{user}/skills` | `users.json` | Сохранение нового навыка |
| `userSkillCreate` | GET | `/api/users/{user}/skills/create` | `users.json` | Поля для формы создания нового навыка |
| `userSkillEdit` | GET | `/api/users/{user}/skills/{skill}/edit` | `users.json` | Форма для редактирования навыка |
| `userSkillUpdate` | PUT | `/api/users/{user}/skills/{skill}` | `users.json` | Обновление навыка сотрудника |
| `userSkillDestroy` | DELETE | `/api/users/{user}/skills/{skill}` | `users.json` | Удаление навыка сотрудника |
| `userTableSort` | POST | `/api/users/table-sort` | `users.json` | Сохраняет настройки полей таблицы |
| `getTableFilterFields` | GET | `/api/users/table-filter-fields` | `users.json` | Список доступных полей фильтра |
| `updateTableFilterFields` | POST | `/api/users/table-filter-fields` | `users.json` | Сохраняет выбранные поля фильтра |
| `resetTableFilterFields` | POST | `/api/users/table-default-filter-fields` | `users.json` | Сброс полей фильтра к значениям по умолчанию |
| `userTableDefault` | POST | `/api/users/table-default` | `users.json` | Возврат настроек таблицы по умолчанию |
| `userUpdateTableFilters` | POST | `/api/users/update-table-filters` | `users.json` | Сохраняет фильтр таблицы |
| `userTasksListWithFilter` | POST | `/api/users/{user}/filtered-tasks/{status}` | `users.json` | Список задач c фильтрацией |
| `userTasksListWithFilterWeb` | POST | `/api/users/{user}/filtered-tasks-web/{status}` | `users.json` | Список задач (WEB) с фильтрацией |
| `userTasksList_api_users_user_filtered_tasks` | GET | `/api/users/{user}/filtered-tasks` | `users.json` | Список задач |
| `myTeamTaskStageChange` | POST | `/api/users/stage-tasks/{task}` | `users.json` | Изменение этапа задачи |
| `userTaskDetail` | GET | `/api/users/{user}/tasks/{task}` | `users.json` | Детальная страница задачи |
| `userTaskDelete` | DELETE | `/api/users/{user}/tasks/{task}` | `users.json` | Удаление задачи |
| `userTaskCreate` | GET | `/api/users/tasks/create` | `users.json` | Форма создания новой задачи |
| `userTasksStore` | POST | `/api/users/tasks` | `users.json` | Создание новой задачи |
| `userTaskEdit` | GET | `/api/users/tasks/{task}/edit` | `users.json` | Редактирование задачи |
| `userTaskUpdate` | PUT | `/api/users/tasks/{task}` | `users.json` | Обновление задачи |
| `userTaskRemind` | POST | `/api/task-reminder/{task}` | `users.json` | Напомнить исполнителю |
| `taskUpdateStatus` | POST | `/api/users/tasks/{task}/update-status` | `users.json` | Изменение статуса выполнения задачи |
| `taskTagsEdit` | GET | `/api/users/tasks/{task}/tags/edit` | `users.json` | Форма для изменения тегов Задачи |
| `taskTagsUpdate` | PUT | `/api/users/tasks/{task}/tags` | `users.json` | Обновление тегов Задачи |
| `userTaskUpdateChecklistCheckbox` | PATCH | `/api/users/tasks/{task}/checklist/update-status-checkbox` | `users.json` | Обновить чекбоксы чек-листа задачи |
| `userTaskUpdateShowStatus` | POST | `/api/users/tasks/{task}/update-show-status` | `users.json` | Переключить отображение подзадачи в канбане |
| `usersTaskTagList` | GET | `/api/users/task-tags` | `users.json` | Список тегов |
| `userTaskTagStore` | POST | `/api/users/task-tags` | `users.json` | Создание тега |
| `userTaskTagUpdate` | PUT | `/api/users/task-tags` | `users.json` | Обновление тега |
| `userTaskTagDestroy` | DELETE | `/api/users/task-tags/{tag}` | `users.json` | Удаление тега |
| `userHireDateUpdate` | PUT | `/api/users/{user}/hire-date` | `users.json` | Обновление даты найма и даты окончания испытательного срока |
