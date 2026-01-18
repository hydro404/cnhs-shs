
-- Create mil_results table

CREATE TABLE IF NOT EXISTS mil_results (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nickname VARCHAR(100) NOT NULL,
  strand ENUM('EIM - B', 'HE') NOT NULL,
  score INT NOT NULL,
  time_taken INT NOT NULL COMMENT 'Time taken in seconds',
  date_taken DATETIME DEFAULT CURRENT_TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_score_time (score DESC, time_taken ASC, date_taken ASC),
  INDEX idx_strand (strand)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Create physci_results table

CREATE TABLE IF NOT EXISTS physci_results (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nickname VARCHAR(100) NOT NULL,
  strand ENUM('GAS-A', 'GAS-B', 'CSS', 'EIM') NOT NULL,
  score INT NOT NULL,
  time_taken INT NOT NULL COMMENT 'Time taken in seconds',
  date_taken DATETIME DEFAULT CURRENT_TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_score_time (score DESC, time_taken ASC, date_taken ASC),
  INDEX idx_strand (strand)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
