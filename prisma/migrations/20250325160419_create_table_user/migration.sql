-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nameUser` VARCHAR(100) NOT NULL,
    `emailUser` VARCHAR(50) NOT NULL,
    `ageUser` INTEGER NOT NULL,
    `telUser` VARCHAR(15) NULL,

    UNIQUE INDEX `users_emailUser_key`(`emailUser`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
