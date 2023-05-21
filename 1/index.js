// Создайте метод getStudent, который возвращает promise - объекта (студент с именем "Anri" и возрастом 32), c задержкой 4 секунды.
// Вызовите этот метод - сохраните в переменную.
// Раскройте promise при помощи then, выведите имя студента.


function gerStudent() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            const student = {
                name: "Anri",
                age: 32,
            };
            res(student);
        }, 4000);
    });
}