--TASK 1: How many tasks are in the task table?
SELECT * FROM task
SELECT COUNT(*) AS 'COUNT ALL TASKS' FROM task


--TASK 2: How many tasks in the task table do not have a valid due date?
SELECT * FROM task T WHERE T.due_date IS NULL 
SELECT COUNT(*) AS 'COUNT TASKS THAT HAS NO DUE DATE' FROM task T WHERE T.due_date IS NULL 

-- TSK 3: Find all the tasks that are marked as done.
SELECT * FROM status s 
SELECT * FROM task T WHERE T.status_ID == 3 

-- TSK 4: Find all the tasks that are not marked as done.
SELECT * FROM status s 
SELECT * FROM task T WHERE T.status_ID != 3

-- TSK 5: Get all the tasks, sorted with the most recently created first.
SELECT * FROM task T ORDER BY T.created DESC

-- TSK 6: Get the single most recently created task
SELECT  * FROM task T ORDER BY T.created DESC LIMIT 1

-- TSK 7: Get the title and due date of all tasks where the title or description contains database
SELECT  T.title, T.due_date  FROM task T  WHERE T.title LIKE '%DATABASE%' OR T.description LIKE '%DATABASE%'

-- TSK 8: Get the title and status (as text) of all tasks.
SELECT  T.title, S.name  FROM task T JOIN status s ON T.status_id = S.id 

-- TSK 9: Get the name of each status, along with a count of how many tasks have that status.
SELECT  T.title, S.name  FROM task T JOIN status s ON T.status_id = S.id 
SELECT  S.name, COUNT(S.NAME) FROM task T JOIN status s ON T.status_id = S.id GROUP BY S.name 

-- TSK 10: Get the names of all statuses, sorted by the status with most tasks first.
SELECT  S.name, COUNT(S.NAME) AS COUNTNAME FROM task T JOIN status s ON T.status_id = S.id GROUP BY S.name ORDER BY COUNTNAME DESC



